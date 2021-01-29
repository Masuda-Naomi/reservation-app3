const mongoose =require('mongoose')
const Schema = mongoose.Schema
 
const productSchema = new Schema({

  coverimage: String,
  name:{type: String, required:true,max:[60,'最大文字数は60です。'] },
  coverimage:String,
  name: String,
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  headingtext1: String,
  headingtext2: String,
  headingtext3: String,
})

module.exports = mongoose.model('product',productSchema)
