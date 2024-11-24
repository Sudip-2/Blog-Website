import express from 'express'
import { blog } from '../models/blogschema.js'
import { notifySub } from '../models/notifysubs.js'
import dotenv from 'dotenv'
import webpush from 'web-push'

const router = express.Router()
dotenv.config()
router.use(express.json())

router.use(express.urlencoded({ extended: true }))
router.use(express.json())

webpush.setVapidDetails(
    'mailto:p452570@gmail.com',
    process.env.pushNotifyPublicKey,
    process.env.pushNotifyPrivateKey
)

router.post("/save-subscription", async (req, res) => {
    const subscription = new notifySub(req.body)
    await subscription.save()
    res.json({ status: "Success", message: "Subscription saved!" })
})

router.post('/create', async (req, res) => {
    try {
        await blog.create({
            pic: req.body.pic,
            tag: req.body.tag,
            title: req.body.title,
            author: req.body.author,
            date: req.body.date,
            desc: req.body.desc
        })
        let a = await notifySub.find({})
        const payload = JSON.stringify({
            title: req.body.title,
            body: req.body.desc,
            icon: req.body.pic
        })

        for (let i = 0; i < a.length; i++) {
            try {
                await webpush.sendNotification(a[i], payload)
            } catch (error) {
                notifySub.deleteOne({ _id: a[i]._id })
            }
        }

        res.status(201).json({ success: "blog created successfully" })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: "blog creation in db failed" })
    }
})

export default router