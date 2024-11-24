import express from 'express'
import mongoose from 'mongoose'
import blogRouter from './routes/blogs.js'
import mailRouter from './routes/contact.js'
import user from './routes/userCreate.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const url = process.env.db_url
const app = express()
const port = process.env.port || 3000
await mongoose.connect(url)

app.use(cors())
app.use('/blogs', blogRouter);
app.use('/mail',mailRouter)
app.use('/user',user)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})