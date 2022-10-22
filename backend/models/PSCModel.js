// PSC scheme 를 구성하고 TCF 로 복사
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


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


}, { timestamps: true });


const PSC = mongoose.model('PSC', PSCSchema);

export default PSC;
