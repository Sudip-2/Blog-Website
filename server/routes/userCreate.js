import express from 'express'
import { blog } from '../models/blogschema.js'

const router = express.Router()

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.post('/create',(req,res) => {
    try{
        blog.create({
            pic:req.body.pic,
            tag:req.body.tag,
            title:req.body.title,
            author:req.body.author,
            date:req.body.date,
            desc:req.body.desc
        })
        res.status(201).json({success:"blog created successfully"})
    }
    catch(error){
        console.log(error)
        res.status(500).json({error:"blog creation in db failed"})
    }
})

export default router