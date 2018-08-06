
'use strict';
const React = require('react');
const api = require('../utils/api.js');
const Moment = require('moment');

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      id:'',
      name: '',
      dob: '',
      salary: '',
      skills:[]
    };
  }

  componentDidMount(){
    let empId = this.props.location.pathname.split('/')[2];
    api.getEmployeeById(empId)
    .then((data)=>{
      this.setState(()=>{
        return {
          id: data._id,
          name: data.name,
          dob: Moment(data.dob).format('YYYY-MM-DD'),
          salary: data.salary,
          skills: data.skills.join(',')
        }
      });
    });
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
    console.log(this.state);
    api.editEmployeeById(this.state.id,this.state)
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
    <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
    </form>
    </div>
    );
  }
};

module.exports = Edit;