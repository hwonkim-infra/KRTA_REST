// 휠 굴착기 입력 데이터 Scheme
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    // _id: String,
    
    // 제원 사양
    title: String,
    creator: String,
    description: String,
    date: Date,

}, { timestamps: true });

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog