
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
          dob: Moment(data.dob).format('DD/MM/YYYY'),
          salary: data.salary,
          skills: data.skills
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
    <input type="text" name="dob" className="form-control" placeholder="DoB - dd-mm-yyyy" value={this.state.dob} onChange={this.onChange} required/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="text" name="salary" className="form-control" placeholder="Salary" value={this.state.salary} onChange={this.onChange} required/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="checkbox" name="s1" className="form-control" value={this.state.s1} onChange={this.onChange}/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="checkbox" name="s2" className="form-control" value={this.state.s2} onChange={this.onChange}/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="checkbox" name="s3" className="form-control" value={this.state.s3} onChange={this.onChange}/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="checkbox" name="s4" className="form-control" value={this.state.s4} onChange={this.onChange}/>
    <span className="help-block"></span>
    </div>
    <div className="form-group">
    <input type="checkbox" name="s5" className="form-control" value={this.state.s5} onChange={this.onChange}/>
    <span className="help-block"></span>
    </div>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
    </form>
    </div>
    );
  }
};

module.exports = Edit;