const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    verificationtoken: {
        type: String
    },
    password: {
        type: String
    },
    dateofbirth: {
        type: String
    },
    adharcardnumber: {
        type: Number
    },
    pancardnumber: {
        type: Number
    },
    occupation: {
        type: String
    },
    gender: {
        type: String
    },
    vToken: {
        type: String
    },

})

const UserModel = new mongoose.model('formdetails', UserSchema)

module.exports = UserModel;
