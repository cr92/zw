'use strict';
const React = require('react');
const Moment = require('moment');
const api = require('../utils/api.js');

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        employees: [],
        filtered: []
      }
    }

    componentDidMount() {
      api.getAllEmployees().then((data) => {
        this.setState(()=>{
          return {
            employees:data,
            filtered:data
          }
        })
      })
    }
    
    deleteEmployee(empId) {
      api.deleteEmployeeById(empId)
      .then(()=>api.getAllEmployees())
      .then((data)=>{
        this.setState(()=>{
          return {
            employees:data,
            filtered:data
          }
        });
      });
    }

    editEmployee(empId) {
      this.props.history.push(`/edit/${empId}`);
    }

    searchEmployees(event){
      let key = event.target.value.toLowerCase();
      let filtered = this.state.employees.filter((emp)=>{
        if (emp.name.toLowerCase().indexOf(key) > -1) {
          return true;
        }
        return false;
      });
      this.setState(()=>{
        return {
          filtered:filtered
        }
      })
    }
    
    render(){
      return(
        <div>
      <br></br>
      <input type="text" placeholder="Search" className="form-control col-sm-3" onChange={this.searchEmployees.bind(this)}/>
      <br></br>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>DoB</th>
            <th>Salary</th>
            <th>Skills</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.filtered.map((emp)=>{
            let empId=emp._id;
            return(
          <tr key={emp._id}>
            <td>{emp.name}</td>
            <td>{Moment(emp.dob).format('DD-MMM-YYYY')}</td>
            <td>{emp.salary}</td>
            <td>{emp.skills.join(',')}</td>
            <td><button type="button" className="btn btn-sm btn-warning" onClick={this.editEmployee.bind(this,empId)}>Edit</button></td>
            <td><button type="button" className="btn btn-sm btn-danger" onClick={this.deleteEmployee.bind(this,empId)}>Delete</button></td>
          </tr>)})}
        </tbody>
      </table>
      </div>
    )
  }
}

module.exports = Home;

