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

router.get('/filter',async(req,res) => {
    let filterText = req.query.filter
    try{
        if(filterText == 'from newest'){
            let blogs = await blog.aggregate([{$sort:{date:-1}}])
            res.send(blogs)
        }
        if(filterText == 'from oldest'){
            let blogs = await blog.aggregate([{$sort:{date:1}}])
            res.send(blogs)
        }
        if(filterText == 'tech'){
            let blogs = await blog.find({tag:'tech'})
            res.send(blogs)
        }
        if(filterText == 'lifestyle'){
            let blogs = await blog.find({tag:'lifestyle'})
            res.send(blogs)
        }
    }
    catch(error){
        console.log(error)
    }
})

router.get('/onclick/:title',async(req,res) => {
    let id = req.params.title
    let specificBlog = await blog.findOne({title:id})
    console.log(id)
    res.send(specificBlog)
})

router.get('/search',async(req,res) => {
    let id = req.query.search
    let specificBlog = await blog.find({title:{$regex:id,$options:'i'}})
    console.log(id)
    res.send(specificBlog)
})

router.post('/create')

export default router