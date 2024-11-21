import express from 'express'
import {notifySub} from '../models/notifysubs.js'
import dotenv from 'dotenv'
import webpush from 'web-push'

const router = express.Router()
dotenv.config()
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

router.get("/send-notification", async (req, res) => {
    let a = await notifySub.find({})
    const payload = JSON.stringify({
        title:"Hello World",
        body:"New post",
        icon:"https://media.istockphoto.com/id/2125872569/photo/businessman-signing-a-legal-real-estate-contract-agreement-home-insurance.jpg?s=1024x1024&w=is&k=20&c=6q_ZhxuXzuvFaRIiQUl8a3D3SNd0nQoXRoZOb-ORc98="
    })
    try {
        a.forEach(async(e) => await webpush.sendNotification(e, payload))
    } catch (error) {
        console.log(error);
    }
    
    res.json({ "status": "Success", "message": "Message sent to push service" });
})

export default router