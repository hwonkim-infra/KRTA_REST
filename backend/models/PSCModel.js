// PSC scheme 를 구성하고 TCF 로 복사
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TCFSchema = new Schema({
    // _id: String,
    
    // TCF 구조: 기종과 기종그룹별 세부사항 추가
    group: String,
    models: Array,
    riskReduc: String,

}, { timestamps: true });

const PSCSchema = new Schema({
    // _id: String,
    
    // PSC 구조
    item: String,
    reference: String,
    requirements: String,    
    riskReduct: String,
    complyStatements: String,
    hazardDescript: String,
    description: String,
    tags: Array,
    date: Date,

    TCF: [TCFSchema]    // TCF as subDocuments

}, { timestamps: true });


const PSC = mongoose.model('PSC', PSCSchema);

export default PSC;
