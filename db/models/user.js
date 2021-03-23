const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error('Phone number is invalid')
            }
        }
    },
    email: {
        type: String,
        required: false,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
        trim: true
    },
    work: {
        type: String,
        required: false,
        trim: true
    }
}, {
    timestamps: true
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users