import express from 'express'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken'
import { user } from '../models/userschema.js';
import { blog } from '../models/blogschema.js'

// let saltRounds = 10;
const router = express.Router()


router.use(express.json())

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

router.get('/create',(req,res) => {
    blog.insertMany([
        {
            id: blog.collection.countDocuments()+1,
            pic: "https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.jpg?s=1024x1024&w=is&k=20&c=6q_ZhxuXzuvFaRIiQUl8a3D3SNd0nQoXRoZOb-ORc98=",
            tag: ["JavaScript", "Programming"],
            title: "Understanding Closures in JavaScript",
            author: "Sudip",
            date: new Date("2024-10-01"),
            desc: "A deep dive into how closures work in JavaScript and their importance in functional programming."
        } ,
        {
            id: blog.collection.countDocuments()+1,
            pic: "https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.jpg?s=1024x1024&w=is&k=20&c=6q_ZhxuXzuvFaRIiQUl8a3D3SNd0nQoXRoZOb-ORc98=",
            tag: ["Web Development", "CSS"],
            title: "Mastering Flexbox for Layouts",
            author: "Sudip",
            date: new Date("2024-10-10"),
            desc: "An essential guide to mastering Flexbox for creating responsive web layouts with ease."
        },
        {
            id: blog.collection.countDocuments()+1,
            pic: "https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.jpg?s=1024x1024&w=is&k=20&c=6q_ZhxuXzuvFaRIiQUl8a3D3SNd0nQoXRoZOb-ORc98=",
            tag: ["Backend", "Node.js"],
            title: "Building RESTful APIs with Express.js",
            author: "Sudip",
            date: new Date("2024-10-15"),
            desc: "Learn how to build RESTful APIs using Express.js and best practices for handling requests and responses."
        },
        {
            id: blog.collection.countDocuments()+1,
            pic: "https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.jpg?s=1024x1024&w=is&k=20&c=6q_ZhxuXzuvFaRIiQUl8a3D3SNd0nQoXRoZOb-ORc98=",
            tag: ["MongoDB", "Database"],
            title: "Getting Started with MongoDB",
            author: "Sudip",
            date: new Date("2024-10-20"),
            desc: "A beginner's guide to setting up and using MongoDB for storing and querying data efficiently."
        },
        {
            id: blog.collection.countDocuments()+1,
            pic: "https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.jpg?s=1024x1024&w=is&k=20&c=6q_ZhxuXzuvFaRIiQUl8a3D3SNd0nQoXRoZOb-ORc98=",
            tag: ["Frontend", "JavaScript"],
            title: "Implementing Drag and Drop in Web Apps",
            author: "Sudip",
            date: new Date("2024-10-23"),
            desc: "Step-by-step tutorial on how to implement drag-and-drop functionality using JavaScript."
        }
    ])
})
export default router