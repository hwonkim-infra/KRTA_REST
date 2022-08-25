import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const HEXSchema = new Schema({
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
    
    gearbox: String,
    overall_length: Number,
    overall_width: Number,
    overall_height: Number,
    rear_swing_radius: Number,

    overall_height_woQC: Number,
    overall_length_woQC: Number,
    ETC: String,
    ECN: String,
    approval_result: String,

    // 하부체와 트랙
    undercarriage: {
        ground_clearance: Number,
        shoe_width: Number,
        tumbler_distance: Number,
        track_length: Number,
        track_height: Number,
        track_gap: Number,
        dozer_size: String,

        ground_Length: Number,
        ground_pressure: Number,
        ground_pressure_woqc: Number,
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
        pump_displacement: Number,
        pump_pressure: Number,
        TM_flow_1: Number,
        TM_flow_2: Number,
        TM_mv: Number,
        TM_mt: Number,
        TM_r: Number,
        surface_drag: Number,
        sprocket_radius: Number,
        drag: Number,
        reduc: Number,
        greadability_ref: Number,
        brake_torque: Number,

        travel_speed: Number,        
        greadability: Number,        
    },

    // 외관도 및 도면 관련
    drawings: {
        exterior: String,
        boom: String,
        arm: String,
        bucket: String,
        bucket_capa_heap: String,
        bucket_capa_struck: String,
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
        approval_result: String,
    },

    // 무게중심과 전도안정성 관련
    COG: {
        tipping_line: Number,   // 전도지선
        bucket_COS: Number,     // 버켓최장굴착

        baseMachine_longitudinal: Number,   // 작업장치 제외 COG
        baseMachine_lateral: Number,
        baseMachine_vertical: Number,

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
        
        /* 자세별 작업장치의 COG */
        attachments_load_longitudinal: Number,
        // attachments_load_lateral: Number,   // lateral COG 는 불변
        attachments_load_vertical: Number,
        
        attachments_maxReach_longitudinal: Number,
        // attachments_maxReach_lateral: Number,
        attachments_maxReach_vertical: Number,  
        
        COG_longitudinal: Number,
        COG_lateral: Number,
        COG_vertical: Number,

        
    },

    // 수송
    transport: {
        transport_1: String,
        transport_1_height: Number,
        transport_1_weight: Number,
        transport_2: String,
        transport_2_height: Number,
        transport_2_weight: Number,
        transport_3: String,
        transport_3_height: Number,
        transport_3_weight: Number,
        transport_4: String,
        transport_4_height: Number,
        transport_4_weight: Number,
        transport_5: String,
        transport_5_height: Number,
        transport_5_weight: Number,
    },
    
}, { timestamps: true });

const HEX = mongoose.model('HEX', HEXSchema);

export default HEX