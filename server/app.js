import express from 'express'
import mongoose from 'mongoose'
// import userRouter from './routes/user.js'
import blogRouter from './routes/blogs.js'

const url = "mongodb://localhost:27017/Blog-site"
const app = express()
const port = 3000
let a = await mongoose.connect(url)

// app.use('/users', userRouter);
app.use('/blogs', blogRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})