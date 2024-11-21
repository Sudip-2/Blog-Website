import express from 'express'
import mongoose from 'mongoose'
import blogRouter from './routes/blogs.js'
import notifyRouter from './routes/notify.js'
import mailRouter from './routes/contact.js'
import user from './routes/userCreate.js'
import dotenv from 'dotenv'

dotenv.config()
const url = process.env.db_url
const app = express()
const port = process.env.port || 3000
await mongoose.connect(url)

app.use('/blogs', blogRouter);
app.use('/notify', notifyRouter);
app.use('/mail',mailRouter)
app.use('/user',user)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})