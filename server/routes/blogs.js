import express from 'express'
import { blog } from '../models/blogschema.js'

const router = express.Router()

router.get('/latest',async(req,res) => {
    let blogsLatest = await blog.aggregate([{$sort:{date:-1}},{$limit:10}])
    res.status(200).send(blogsLatest)
})

router.get('/allblogs',async(req,res) => {
    let allblogs = await blog.find({})
    res.status(200).send(allblogs)
})

router.get('/title',async(req,res) => {
    let alltitle = await blog.find({},{title:1,_id:0})
    res.status(200).send(alltitle)
})

router.get('/onclick/:id',async(req,res) => {
    let id = req.query.id 
    let specificBlog = await blog.findOne({_id:id})
    res.send(specificBlog)
})

export default router