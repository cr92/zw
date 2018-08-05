'use strict';

const axios = require('axios');
const baseUrl = 'http://localhost:3000/api';

module.exports = {
    getAllEmployees: function (from, to) {
        let URI = `${baseUrl}/employees`;
        return axios({
                method: 'get',
                url: URI,
                params: {
                    from,
                    to
                }
            })
            .then(function (response) {
                return response.data;
            });
    },
    getEmployeeById: function (empId) {
        let URI = `${baseUrl}/employees/${empId}`;
        return axios({
                method: 'get',
                url: URI
            })
            .then(function (response) {
                return response.data;
            });
    },
    createNewEmployee: function (data) {
        let URI = `${baseUrl}/employees`;
        return axios({
                method: 'post',
                url: URI,
                data
            })
            .then(function (response) {
                return response.data;
            });
    },
    deleteEmployeeById: function (empId) {
        let URI = `${baseUrl}/employees/${empId}`;
        return axios({
                method: 'delete',
                url: URI
            })
            .then(function (response) {
                return response.data;
            });
    },
    editEmployeeById: function (empId, data) {
        let URI = `${baseUrl}/employees/${empId}`;
        return axios({
                method: 'put',
                url: URI,
                data
            })
            .then(function (response) {
                return response.data;
            });
    }
}