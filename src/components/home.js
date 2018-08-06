'use strict';
const React = require('react');
const Moment = require('moment');
const api = require('../utils/api.js');

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.prevPage = this.prevPage.bind(this);
      this.nextPage = this.nextPage.bind(this);
      this.state = {
        employees: [],
        filtered: [],
        page:0,
        totalCount:0
      }
    }

    nextPage(){
      let page = this.state.page;
      api.getAllEmployees(5*(page+1),5*(page+2)).then((data) => {
        if (data.length > 0) {
          this.setState(()=>{
          return {
            employees:data,
            filtered:data,
            page:page+1
          }
        })
        }
      })
    }
    
    prevPage(){
      let page = this.state.page;
      api.getAllEmployees(5*(page-1),5*(page)).then((data) => {

          this.setState(()=>{
          return {
            employees:data,
            filtered:data,
            page:page-1
          }
        })
      })
    }

    componentDidMount() {
      api.getAllEmployees(5*this.state.page,5*(this.state.page+1)).then((data) => {
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
            <td>{Moment(emp.dob).format('DD/MM/YYYY')}</td>
            <td>{emp.salary}</td>
            <td>{emp.skills.join(',')}</td>
            <td><button type="button" className="btn btn-sm btn-warning" onClick={this.editEmployee.bind(this,empId)}>Edit</button></td>
            <td><button type="button" className="btn btn-sm btn-danger" onClick={this.deleteEmployee.bind(this,empId)}>Delete</button></td>
          </tr>)})}
        </tbody>
      </table>
      <button type="button" className="btn btn-sm btn-default" onClick={this.prevPage}>Prev</button>
      <button type="button" className="btn btn-sm btn-default" onClick={this.nextPage}>Next</button>
      </div>
    )
  }
}

module.exports = Home;

