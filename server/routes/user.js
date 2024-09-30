// import express from 'express'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
// import { user } from '../models/userschema.js';

// let saltRounds = 10;
// const router = express.Router()


// router.use(express.json())

// const password = function(){
//     try{
//         const salt = bcrypt.genSaltSync(saltRounds);
//         const hash = bcrypt.hashSync(req.body.password, salt);
//         return hash
//     }catch(error){
//         res.send(500).json({message:"internal error"})
//     }
// }

// const login = function as(req,res,next){
//     try{
//         let findUserPass = await user.findOne({email:req.body.email})
//         if(findUserPass.password == req.body.password){
//             next()
//         }
//     }catch(error){
//         res.send(404).json({message:"user not found"})
//     }
// }

// router.post('/signup',password, async (req, res) => {
//     try {
//         const newUser = new user({
//             title: req.body.title,
//             pfp: req.body.pfp,
//             name: req.body.name,
//             email: req.body.email,
//             password: hash
//         })
//             await newUser.save()
//         res.status(201).json({message:"Hello world"})
//     } catch (error) {
//         res.status(409).json({message:"user already exist with account"})
//     }

// })

// router.post('/login',login, async(req,res) => {
//     try{
//         res.send("Logged in")
//     }
//     catch(error){
//         res.send(error)
//     }
// })

// export default router