import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import blogRouter from './routes/blogs.js'
import notifyRouter from './routes/notify.js'
import mailRouter from './routes/contact.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const url = process.env.db_url
const app = express()
const port = process.env.port
let a = await mongoose.connect(url)

app.use(cors())
app.use('/users', userRouter);
app.use('/blogs', blogRouter);
app.use('/notify', notifyRouter);
app.use('/mail',mailRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})