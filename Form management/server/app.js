const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./Model')
const nodemailer = require('nodemailer')
const sendVerification = require('./sendVerificationEmail')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/formmanagement')

app.get('/gettoken', (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/verify/:id', (req, res) => {
    const id = req.params.id
    // edit the verified person db to verified
    res.redirect(`http://localhost:5173/master/${id}`)
})

app.post('/add', async (req, res) => {
    try {
        const details = req.body.details;
        const verificationToken = Math.random().toString(36).slice(2, 8)
        const first = {
            firstname: details.firstname,
            lastname: details.lastname,
            email: details.email,
            verificationtoken: verificationToken,
            password: details.password,
            dateofbirth: details.dateofbirth,
            adharcardnumber: details.adharcardnumber,
            pancardnumber: details.pancardnumber,
            occupation: details.occupation,
            gender: details.gender,
            // vToken: details.vToken,
        }
        sendVerification(first.email, verificationToken)
        UserModel.insertMany([first])
        res.json(first)
    }
    catch (err) {
        res.json(err)
    }
})

app.listen(3000, () => {
    console.log('listening...')
})

