import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    title:String,
    pfp:String,
    name: String,
    email: { type: String, unique: true },
    password:String
  });

export const user = mongoose.model('User', userSchema);