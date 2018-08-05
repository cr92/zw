'use strict';

const Employee = require('../models/employee.js');

module.exports = {
    createNewEmployee: function (req, res, next) {
        let employeeData = req.body;
        Employee
            .create(employeeData)
            .then((employee) => res.send(employee))
            .catch(next);
    },

    readEmployeeById: function (req, res, next) {
        res.status(200).send({
            a: 2
        });
    },

    readAllEmployees: function (req, res, next) {
        console.log(req.query);
        res.status(200).send({
            a: 3
        });
    },

    updateEmployeeById: function (req, res, next) {
        res.status(200).send({
            a: 1
        });
    },

    deleteEmployeeById: function (req, res, next) {
        res.status(200).send({
            a: 5
        });
    }
}