const roundTwo = (num) => {
  return +(Math.round(num + "e+2") + "e-2");
};

const roundOne = (num) => {
  return +(Math.round(num + "e+1") + "e-1");
};

const degrees_to_radians = (degrees) => {
  return degrees / (180 / Math.PI);
};
const radians_to_degrees = (radians) => {
  return radians * (180 / Math.PI);
};

const WEXCalc = (values) => {
  values.undercarriage ??= {};
  values.engine ??= {};
  values.attachments ??= {};
  values.swivel ??= {};
  values.travel ??= {};
  values.drawings ??= {};
  values.description ??= {};
  values.COG ??= {};
  values.transport ??= {};

  // console.log("🚀 ~ file: WEXCalc.jsx ~ line 11 ~ WEXCalc ~ values", values)
  const grossWeight = Number(values.operating_weight) + 65; // 총중량
  const bucket_exca_capa = Number(values.attachments.bucket_heap) * 1500; // 산적 시 버켓 중량
  const quick_coupler_weight = Math.max(
    // 퀵 커플러 중량
    values.attachments.quick_coupler_weight_1,
    values.attachments.quick_coupler_weight_2
  );

  const grossWeight_load = Number(grossWeight + bucket_exca_capa); // 적재총중량

  /* 주행성능 */
  const rearAxle_center =
    values.undercarriage.wheel_base - values.undercarriage.frontAxle_center;
  const axle_weight_front_unload =
    Math.round(Number(
      (values.operating_weight *
        (rearAxle_center - values.undercarriage.COG_center_unload)) /
        values.undercarriage.wheel_base
    )) || ""; // 공차하중 1축
  const axle_weight_rear_unload =
    Math.round(Number(
      (values.operating_weight *
        (values.undercarriage.frontAxle_center +
          values.undercarriage.COG_center_unload)) /
        values.undercarriage.wheel_base
    )) || ""; // 공차하중 2축

  /* 적재하중 1,2축 */
  const axle_weight_front_load =
    Math.round(Number(
      (grossWeight_load *
        (rearAxle_center - values.undercarriage.COG_center_load)) /
        values.undercarriage.wheel_base
    )) || "";
  const axle_weight_rear_load =
    Math.round(Number(
      (grossWeight_load *
        (values.undercarriage.frontAxle_center +
          values.undercarriage.COG_center_load)) /
        values.undercarriage.wheel_base
    )) || "";

    /* 주행속도 */
  const axle_motor_rev = Math.round(Number(
    ((values.travel.pump_displacement_travel * values.travel.motor_eff_travel) /
      values.travel.motor_displacement_travel) *
    1000
  ));
  const travel_speed = Math.round(Number(
    (((2 * Math.PI * axle_motor_rev * values.travel.tire_rolling_radius) /
      1000) *
      60) /
    (values.travel.TM_reduction * values.travel.axle_reduction * 10 ** 3)
  ));

  const noslip_slope = radians_to_degrees(
    Math.atan(values.travel.friction_surface)
  ).toFixed(1);
  const traction_slope = radians_to_degrees(
    Math.asin(
      (values.travel.traction_force -
        values.travel.running_resist * grossWeight) /
        grossWeight
    )
  ).toFixed(1);
  const greadability = Math.round(Number(Math.min(
    values.travel.engine_slope,
    noslip_slope,
    traction_slope
  )));

  const innerKingpin_COS = Math.round(
    values.undercarriage.wheel_base /
      Math.sin(degrees_to_radians(values.travel.wheel_angle))
  );
  const outer_rim_minRadius = Math.round(
    innerKingpin_COS + values.travel.kingpin_offset
  );
  const turning_radius = Math.ceil((outer_rim_minRadius * 1.05) / 1000) * 1000;

  const braking_speed_standard = Math.max(travel_speed * 0.8, 32);
  const braking_force_axle = (
    values.travel.brake_torque_axle /
    ((9.8 * values.travel.tire_rolling_radius) / 1000)
  ).toFixed();
  const braking_force_total = (2 * braking_force_axle).toFixed();
  const braking_limit_slope = radians_to_degrees(
    Math.asin(braking_force_total / grossWeight)
  ).toFixed(1);
  const idle_running = 0.5;

  const decceleration_rate = (braking_force_total / grossWeight).toFixed(1);
  const decceleration = (decceleration_rate * 9.81).toFixed(1);
  const braking_distance_max = roundOne(Number(
    (travel_speed ** 2 / (2 * decceleration)) * (1000 / 3600) ** 2 +
    idle_running * travel_speed * (1000 / 3600)
  ));
  const braking_distance_norm = roundOne(Number(
    (braking_speed_standard ** 2 / (2 * decceleration)) * (1000 / 3600) ** 2 +
    idle_running * braking_speed_standard * (1000 / 3600)
  ));

  /* 전도안정도 */

  let baseMachine_weight = values.grossWeight - values.COG.attachments_weight;

  let COG_longitudinal = roundOne(
    (baseMachine_weight * values.COG.baseMachine_longitudinal +
      values.COG.attachments_weight * values.COG.attachments_longitudinal) /
      values.grossWeight
  );

  let COG_lateral = roundOne(
    (baseMachine_weight * values.COG.baseMachine_lateral +
      values.COG.attachments_weight * values.COG.attachments_lateral) /
      values.grossWeight
  );

  let COG_vertical = roundOne(
    (baseMachine_weight * values.COG.baseMachine_vertical +
      values.COG.attachments_weight * values.COG.attachments_vertical) /
      values.grossWeight
  );

  /* 선회성능 */
  const swing_reduction_rev =
    ((values.swivel.pump_flow * values.swivel.motor_eff) /
      values.swivel.motor_displacement) *
    1000;

  const swing_rev =
    roundTwo(swing_reduction_rev / values.swivel.reduction) || null;

  /* 수송중량 */

  const transport_1_weight =
    values.operating_weight -
    (values.transport.transport_2_weight || 0) -
    (values.transport.transport_3_weight || 0) -
    (values.transport.transport_4_weight || 0) -
    (values.transport.transport_5_weight || 0) -
    (values.transport.transport_6_weight || 0) -
    (values.transport.transport_7_weight || 0) -
    (values.transport.transport_8_weight || 0) -
    (values.transport.transport_9_weight || 0);

  return (
    (values.grossWeight = grossWeight),
    (values.attachments.bucket_exca_capa = bucket_exca_capa),
    (values.grossWeight_load = grossWeight_load),
    
    (values.undercarriage.rearAxle_center = rearAxle_center),
    (values.undercarriage.axle_weight_front_unload = axle_weight_front_unload),
    (values.undercarriage.axle_weight_rear_unload = axle_weight_rear_unload),
    (values.undercarriage.axle_weight_front_load = axle_weight_front_load),
    (values.undercarriage.axle_weight_rear_load = axle_weight_rear_load),

    (values.travel.axle_motor_rev = axle_motor_rev),
    (values.travel.travel_speed = travel_speed),
    (values.travel.greadability = greadability),

    (values.travel.braking_distance_max = braking_distance_max),
    (values.travel.braking_distance_norm = braking_distance_norm),


    (values.travel.turning_radius = turning_radius),
    (values.swivel.swing_rev = swing_rev),
    (values.transport.transport_1_weight = transport_1_weight),
    (values.COG.COG_longitudinal = COG_longitudinal),
    (values.COG.COG_lateral = COG_lateral),
    (values.COG.COG_vertical = COG_vertical),
    ""
  );
};

export default WEXCalc;
