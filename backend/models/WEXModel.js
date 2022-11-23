// 휠 굴착기 입력 데이터 Scheme
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WEXSchema = new Schema({
    _id: String,
    ChangeModel: { type: Boolean },
    origin: String,

    // 제원 사양
    model_name: String,
    serial_no: Number,
    registration_no: String,
    machine_grade: String,
    operating_weight: Number,
    grossWeight: Number,
    grossWeight_load: Number,
    
    gearbox: String,    // 변속기
    overall_length: Number,
    overall_width: Number,
    overall_height: Number,
    rear_swing_radius: Number,  

    overall_height_woQC: Number,
    overall_length_woQC: Number,
    ETC: String,  // 비고
    ECN: String,  
    approval_result: String,

    // 하부체와 액슬
    undercarriage: {
        ground_clearance: Number,
        wheel_base: Number,
        axle_track_front: Number,
        axle_track_rear: Number,
        no_tires: Number,
        tire_frontAxle: String,
        tire_rearAxle: String,
        tire_load_limit: Number,
        tire_load_limit_running: Number,

        COG_center_unload: Number,  // 공차 적재 무게중심 
        COG_center_load: Number,
        frontAxle_center: Number,
        rearAxle_center: Number,

        axle_weight_front_unload: Number,
        axle_weight_rear_unload: Number,

        axle_weight_front_load: Number,
        axle_weight_rear_load: Number,

        axle_weight_front_limit: Number,
        axle_weight_rear_limit: Number,
        axle_limit_description: String,
    },

    // 엔진 관련
    engine: {
        engine_name: String,
        supplier: String,
        power: Number,
        nominal_rev: Number,
        torque: Number,
        torque_rev: Number,
        cylinder: Number,
    },


    // 작업장치 관련
    attachments: {
        bucket_struck: Number,
        bucket_heap: Number,
        arm_length: Number,
        boom_length: Number,
        quick_coupler_1: String,
        quick_coupler_weight_1: Number,
        quick_coupler_2: String,
        quick_coupler_weight_2: Number,

        // 작업반경
        digging_reach: Number,
        digging_reach_woqc: Number,
        digging_depth: Number,
        digging_depth_woqc: Number,
        loading_height: Number,
        loading_height_woqc: Number,

        // 계산
        quick_coupler_weight: Number,
        bucket_exca_capa: Number,
        
    },

    //전도안정성
    stability: {
        bucket_COS: Number,
        COG_COS: Number,
        tipping_line: Number,
    },

    // 선회성능 관련
    swivel: {
        pump_flow: Number,
        motor_displacement: Number,
        reduction: Number,
        motor_eff: Number,

        swing_rev: Number,
    },

    // 주행성능 관련
    travel: {
        pump_displacement_travel: Number,
        motor_displacement_travel: Number,
        motor_eff_travel: Number,
        TM_reduction: Number,
        axle_reduction: Number,
        tire_rolling_radius: Number,

        /* 주행속도 */
        axle_motor_rev: Number,
        travel_speed: Number,

        // 등판능력 계산
        traction_force: Number,
        friction_surface: Number,
        running_resist: Number,
        engine_slope: Number,
        greadability: Number,

        // 최소회전반경
        kingpin_gap: Number,
        kingpin_offset: Number,
        wheel_angle: Number,

        turning_radius: Number,

        // 서비스 브레이크 제동력
        brake_pressure: Number,
        brake_eff: Number,
        axle_hub_reduction: Number,
        brake_torque_axle: Number,

        braking_distance_max: Number,
        braking_distance_norm: Number,

        braking_description: String,
    },

    // 외관도 및 도면 관련
    drawings: {
        exterior: String,
        boom: String,
        arm: String,
        bucket: String,
        bucket_capa_struck: String,
        bucket_capa_heap: String,
        Qcouplr: String,
        dozer: String,
        Emission_Certi: String,
        Emission_Certi2: String,
        EngineCurve: String,
    },

    description: {
        swing_reduction: String,
        travel_reduction: String,
        climb: String,
        bucket_creep: String,
    },
    appendix: Array,

    // 무게중심 관련
    COG: {
        upperStructure_longitudinal: Number,
        upperStructure_lateral: Number,
        upperStructure_vertical: Number,
        
        counterWeight_weight: Number,
        counterWeight_longitudinal: Number,
        counterWeight_lateral: Number,
        counterWeight_vertical: Number,
        
        underCarriage_weight: Number,
        underCarriage_longitudinal: Number,
        underCarriage_lateral: Number,
        underCarriage_vertical: Number,
        
        attachments_weight: Number,
        attachments_longitudinal: Number,
        attachments_lateral: Number,
        attachments_vertical: Number,
        
        attachments_load_longitudinal: Number,
        attachments_load_lateral: Number,
        attachments_load_vertical: Number,
        
        attachments_maxReach_longitudinal: Number,
        attachments_maxReach_lateral: Number,
        attachments_maxReach_vertical: Number,        
    },
}, { timestamps: true });

const WEX = mongoose.model('WEX', WEXSchema);

export default WEX