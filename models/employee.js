'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    skills: [String]
});

const Employee = Mongoose.model('employee', EmployeeSchema);

module.exports = Employee;