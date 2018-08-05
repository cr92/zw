'use strict';

module.exports = {
    createNewEmployee: function (req, res, next) {
        res.status(200).send({
            a: 4
        });
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