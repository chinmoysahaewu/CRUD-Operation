const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const employeeSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee