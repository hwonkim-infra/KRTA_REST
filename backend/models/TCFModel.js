// PSC scheme 를 구성하고 TCF 로 복사
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TCFSchema = new Schema({
    // _id: String,
    
    // TCF 구조: 기종과 기종그룹별 세부사항 추가
    title: String,
    PSCitem: String,
    creator: String,
    models: Array,
    requirements: String,    
    complyStatements: String,
    hazardDescript: String,
    riskReduct: String,
    description: String,
    reference: String,
    tags: Array,
    date: Date,

}, { timestamps: true });

const TCF = mongoose.model('TCF', TCFSchema);

export default TCF