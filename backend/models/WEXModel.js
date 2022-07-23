// 휠 굴착기 입력 데이터 Scheme
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WEXSchema = new Schema({
    _id: { type: String },
    ChangeModel: { type: Boolean },
    origin: { type: String },

    // 제원 사양
    model_name: { type: String },
    serial_no: Number,
    registration_no: Number,
    machine_grade: { type: String },
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
    ETC: { type: String },  // 비고
    ECN: { type: String },  

    // 하부체와 액슬
    undercarriage: {
        ground_clearance: { type: Number },
        wheel_base: { type: Number },
        axle_track_front: { type: Number },
        axle_track_rear: { type: Number },
        no_tires: { type: Number },
        tire_frontAxle: { type: String },
        tire_rearAxle: { type: String },
        tire_load_limit: { type: Number },
        tire_load_limit_running: { type: Number },

        COG_center_unload: { type: Number },
        COG_center_load: { type: Number },
        frontAxle_center: { type: Number },

        axle_weight_front_limit: { type: Number },
        axle_weight_rear_limit: { type: Number },
        axle_limit_description: { type: String },
    },

    // 엔진 관련
    engine: {
        engine_name: { type: String },
        supplier: { type: String },
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
        quick_coupler_1: { type: String },
        quick_coupler_weight_1: Number,
        quick_coupler_2: { type: String },
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
        pump_displacement_travel: { type: Number },
        motor_displacement_travel: { type: Number },
        motor_eff_travel: { type: Number },
        TM_reduction: { type: Number },
        axle_reduction: { type: Number },
        tire_rolling_radius: { type: Number },
        // 등판능력 계산
        traction_force: { type: Number },
        friction_surface: { type: Number },
        running_resist: { type: Number },
        engine_slope: { type: Number },

        // 최소회전반경
        kingpin_gap: { type: Number },
        kingpin_offset: { type: Number },
        wheel_angle: { type: Number },

        // 서비스 브레이크 제동력
        brake_pressure: { type: Number },
        brake_eff: { type: Number },
        axle_hub_reduction: { type: Number },
        brake_torque_axle: { type: Number },
        braking_description: { type: String },
    },

    // 외관도 및 도면 관련
    drawings: {
        exterior: { type: String },
        boom: { type: String },
        arm: { type: String },
        bucket: { type: String },
        bucket_capa: { type: String },
        Qcouplr: { type: String },
        dozer: { type: String },
        Emission_Certi: { type: String },
        Emission_Certi2: { type: String },
        EngineCurve: { type: String },
    },

    description: {
        swing_reduction: { type: String },
        travel_reduction: { type: String },
        climb: { type: String },
        bucket_creep: { type: String },
    },

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