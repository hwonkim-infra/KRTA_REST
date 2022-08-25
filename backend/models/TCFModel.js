// 휠 굴착기 입력 데이터 Scheme
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TCFSchema = new Schema({
    // _id: String,
    
    // TCF 구조
    title: String,
    creator: String,
    products: Array,
    requirements: String,    
    complyStatements: String,    
    description: String,
    reference: String,
    tags: Array,
    date: Date,

}, { timestamps: true });

const TCF = mongoose.model('TCF', TCFSchema);

export default TCF