
'use strict';
const React = require('react');
const api = require('../utils/api.js');

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      dob: '',
      salary: '',
      skills:[]
    };
  }
  
  onChange(event) {
    let obj = {};
    let temp_name = event.target.name;
    let temp_val =  event.target.value;
    console.log(temp_name,temp_val);
    this.setState(()=>{
      obj[temp_name]=temp_val
      return obj;
    });
  }
  
  onSubmit(event){
    event.preventDefault();
    api.createNewEmployee(this.state)
    .then(() => {
      this.props.history.push('/');
    })
  }
  
  render() {
    return (
    <div className="container">
    <br/>
    <form onSubmit={this.onSubmit}>
    <div className="form-group">
    <input type="text" name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.onChange} required/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="date" name="dob" className="form-control" placeholder="dd/mm/yyyy" value={this.state.dob} onChange={this.onChange} required/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="text" name="salary" className="form-control" placeholder="Salary" value={this.state.salary} onChange={this.onChange} required/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="text" name="skills" className="form-control" placeholder="enter skills separated by ," value={this.state.skills} onChange={this.onChange} required/>
    <span className="help-block"></span>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Create</button>
    </form>
    </div>
    );
  }
};

module.exports = Add;