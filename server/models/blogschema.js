import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    pic:String,
    tag:Array,
    title:String,
    atuhor:String,
    date: Date,
    desc:String
  });

export const blog = mongoose.model('Blog', blogSchema);