import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const router = express.Router()
router.use(express.json())

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.myEmail,
        pass: process.env.emailPassKey
    }
})

router.post('/sendmail', async (req, res) => {
    const mailOptions = {
        to:process.env.receiverEmail,
        subject:`Message from ${req.body.name}`,
        text:`${req.body.message} from ${req.body.email}`
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({message:"Mail sent successfully"})
})

export default router