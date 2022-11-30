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


const HEXCalc = (values) => {
    /* values.undercarriage ?? = {};
    values.engine ?? = {};
    values.attachments ?? = {};
    values.swivel ?? = {};
    values.travel ?? = {};
    values.drawings ?? = {};
    values.description ?? = {};
    values.COG ?? = {};
    values.transport ?? = {}; */

    console.log("🚀 ~ file: HEXCalc.jsx ~ line 11 ~ HEXCalc ~ values", values)
    const grossWeight = Number(values.operating_weight) + 65; // 총중량
    const bucket_exca_capa = Number(values.attachments.bucket_heap) * 1500; // 산적 시 버켓 중량
    const quick_coupler_weight = Math.max(
        values.attachments.quick_coupler_weight_1,
        values.attachments.quick_coupler_weight_2
    );

    const grossWeight_load = grossWeight + bucket_exca_capa; // 적재총중량

    const ground_Length =
        Math.round(0.65 * values.undercarriage.tumbler_distance +
            0.35 * values.undercarriage.track_length) / 10; // 접지길이
    const ground_pressure =
        roundTwo(
            grossWeight /
            ((2 * values.undercarriage.shoe_width / 10) * ground_Length)
        ) || null; // 접지압
    const ground_pressure_woqc =
        roundTwo(
            (grossWeight - quick_coupler_weight) /
            ((2 * values.undercarriage.shoe_width / 10) * ground_Length)
        ) || null; // 접지압

    /* 주행성능 */
    const TM_rev_1 =
        ((values.travel.pump_displacement * values.travel.TM_mv) /
            (values.travel.TM_flow_1 * values.travel.reduc)) *
        1000;
    const TM_rev_2 =
        ((values.travel.pump_displacement * values.travel.TM_mv) /
            (values.travel.TM_flow_2 * values.travel.reduc)) *
        1000;
    const travel_speed_1 =
        (TM_rev_1 * 2 * Math.PI * values.travel.sprocket_radius * 60) / 10 ** 6;
    const travel_speed_2 =
        (TM_rev_2 * 2 * Math.PI * values.travel.sprocket_radius * 60) / 10 ** 6;
    const travel_speed =
        roundTwo(Math.max(travel_speed_1, travel_speed_2)) || null;

    const TM_1 =
        ((values.travel.pump_pressure * values.travel.TM_flow_1) /
            (200 * Math.PI)) *
        values.travel.reduc *
        values.travel.TM_mt;
    const TM_2 =
        ((values.travel.pump_pressure * values.travel.TM_flow_2) /
            (200 * Math.PI)) *
        values.travel.reduc *
        values.travel.TM_mt;

    const Traction_Sprocket =
        ((2 * TM_2 * 1000) / values.travel.sprocket_radius) * values.travel.TM_r;
    const ground_traction = values.travel.surface_drag * grossWeight;

    const TS = (
        ((2 * TM_1 * 1000) / values.travel.sprocket_radius) *
        values.travel.TM_r
    ).toFixed(0);
    const AF = values.travel.surface_drag * (values.operating_weight + 65);
    const DP = Math.min(TS, AF);
    const traction_downward =
        (values.travel.sprocket_radius / 1000) *
        grossWeight *
        Math.sin((16.7 / 180) * Math.PI);

    const theta_1 = (
        Math.atan(values.travel.surface_drag) *
        (180 / Math.PI)
    ) || '';
    const theta_2 = (
        (180 / Math.PI) *
        Math.asin((DP - values.travel.drag * grossWeight) / grossWeight)
    ) || '';
    const theta_3 = values.travel.greadability_ref;

    const noslip_slope = radians_to_degrees(
        Math.atan(values.travel.friction_surface)
    ).toFixed(1);
    const traction_slope = radians_to_degrees(
        Math.asin(
            Number((values.travel.traction_force -
                    values.travel.drag * grossWeight) /
                grossWeight)
        )
    ) || '';


    /* 두 경우의 등판각 비교 */
    const greadability_1 = Math.min(theta_1, theta_2, theta_3)
    const greadability_2 = Math.min(
        values.travel.greadability_ref,
        noslip_slope,
        traction_slope
    )

    const greadability = greadability_1 || greadability_2

    /* 전도안정도 */

    let baseMachine_weight = values.grossWeight - values.COG.attachments_weight;

    let COG_longitudinal = roundOne((baseMachine_weight * values.COG.baseMachine_longitudinal + values.COG.attachments_weight * values.COG.attachments_longitudinal) / values.grossWeight);

    let COG_lateral = roundOne((baseMachine_weight * values.COG.baseMachine_lateral + values.COG.attachments_weight * values.COG.attachments_lateral) / values.grossWeight);

    let COG_vertical = roundOne((baseMachine_weight * values.COG.baseMachine_vertical + values.COG.attachments_weight * values.COG.attachments_vertical) / values.grossWeight);

    /* 선회성능 */
    const swing_reduction_rev =
        ((values.swivel.pump_flow * values.swivel.motor_eff) /
            values.swivel.motor_displacement) *
        1000;

    const swing_rev =
        roundTwo(swing_reduction_rev / values.swivel.reduction) || null;

    /* 수송중량 */

    const transport_1_weight =
        (values.operating_weight -
            (values.transport.transport_2_weight || 0) -
            (values.transport.transport_3_weight || 0) -
            (values.transport.transport_4_weight || 0) -
            (values.transport.transport_5_weight || 0) -
            (values.transport.transport_6_weight || 0) -
            (values.transport.transport_7_weight || 0) -
            (values.transport.transport_8_weight || 0) -
            (values.transport.transport_9_weight || 0));


    return (
        (values.grossWeight = grossWeight),
        (values.attachments.bucket_exca_capa = bucket_exca_capa),
        (values.grossWeight_load = grossWeight_load),
        (values.undercarriage.ground_Length = ground_Length),
        (values.undercarriage.ground_pressure = ground_pressure),
        (values.undercarriage.ground_pressure_woqc = ground_pressure_woqc),
        (values.swivel.swing_rev = swing_rev),
        (values.travel.TM_rev_1 = TM_rev_1),
        (values.travel.TM_rev_2 = TM_rev_2),
        (values.travel.TM_1 = TM_1),
        (values.travel.TM_2 = TM_2),

        (values.travel.DP = DP),
        (values.travel.travel_speed_1 = travel_speed_1),
        (values.travel.travel_speed_2 = travel_speed_2),
        (values.travel.travel_speed = travel_speed),
        (values.travel.theta_1 = theta_1),
        (values.travel.theta_2 = theta_2),
        (values.travel.traction_slope = traction_slope),
        (values.travel.greadability = greadability),
        (values.transport.transport_1_weight = transport_1_weight),
        (values.COG.COG_longitudinal = COG_longitudinal),
        (values.COG.COG_lateral = COG_lateral),
        (values.COG.COG_vertical = COG_vertical),
        ""
    );
};

export default HEXCalc;