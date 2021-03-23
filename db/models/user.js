const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
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
    company: {
        type: String,
        required: false,
        trim: true
    },
    laptop_checkbox: {
        type: Boolean,
        required: false,
        trim: true
    },
    pc_checkbox: {
        type: Boolean,
        required: false,
        trim: true
    },
    printer_checkbox: {
        type: Boolean,
        required: false,
        trim: true
    },
    laptop_text: {
        type: String,
        required: false,
        trim: true
    },
    pc_text: {
        type: String,
        required: false,
        trim: true
    },
    printer_text: {
        type: String,
        required: false,
        trim: true
    },
    code: {
        type: String,
        required: false,
        trim: true
    },
    percent_revenue: {
        type: String,
        required: false,
        trim: true
    },
    percent_product: {
        type: String,
        required: false,
        trim: true
    },
    price_checkbox: {
        type: Boolean,
        required: false,
        trim: true
    },
    quality_checkbox: {
        type: Boolean,
        required: false,
        trim: true
    },
    other_checkbox: {
        type: String,
        required: false,
        trim: true
    }
}, {
    timestamps: true
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users