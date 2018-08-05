'use strict';

const Employee = require('../models/employee.js');

module.exports = {
    createNewEmployee: function (req, res, next) {
        let employeeData = req.body;
        Employee
            .create(employeeData)
            .then((employee) => res.status(201).send(employee))
            .catch(next);
    },

    readEmployeeById: function (req, res, next) {
        let employeeId = req.params.id;
        Employee
            .findOne({
                _id: employeeId
            })
            .then((employee) => res.status(200).send(employee))
            .catch(next);
    },

    readAllEmployees: function (req, res, next) {
        Employee
            .find({})
            .then((employees) => res.status(200).send(employees))
            .catch(next);
    },

    updateEmployeeById: function (req, res, next) {
        let employeeId = req.params.id;
        let employeeData = req.body;
        Employee
            .findByIdAndUpdate({
                _id: employeeId
            }, employeeData)
            .then(() => Employee.findById({
                _id: employeeId
            }))
            .then((employee) => res.status(200).send(employee))
            .catch(next);
    },

    deleteEmployeeById: function (req, res, next) {
        let employeeId = req.params.id;
        Employee
            .findByIdAndRemove({
                _id: employeeId
            })
            .then((employee) => res.status(204).send(employee))
            .catch(next);
    }
}