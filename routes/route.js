'use strict';
const EmployeesController = require('../controllers/controller.js');

module.exports = function (App) {

    App.post('/api/employees', EmployeesController.createNewEmployee);
    App.get('/api/employees/:id', EmployeesController.readEmployeeById);
    App.get('/api/employees', EmployeesController.readAllEmployees);
    App.put('/api/employees/:id', EmployeesController.updateEmployeeById);
    App.delete('/api/employees/:id', EmployeesController.deleteEmployeeById);

}