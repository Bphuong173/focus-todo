import mongoose from 'mongoose';
import  {connection}  from '../db.js';
// tạo biến schema xác định cấu trúc và thuộc tính của data trong mongoose là schema
const Schema = mongoose.Schema;
//  xác định các thuộc tính của object schema như key, value trong biến Todoschema
const TodoSchema = new Schema({
  work: { type: String, default: "hahaha" },
  time: { type: String, default: "8h" }
});
// convert từ schema sang model để sử dụng trong biến todomodel
export const todomodel = connection.model("todomodel", TodoSchema);

