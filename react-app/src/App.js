import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Employee from './Employee/Employee';

class App extends Component {

  state = {
    employees: [
      { id:1, name: 'Peti', age: 30},
      { id:2, name: 'Sanyika', age: 24}
    ]
  };

  componentDidMount() {
    // axios.post('http://localhost:8080/employees', {"name" : "test4"}).then(response => {
    //   console.log(response);
    //   console.log('lementve');
    // });
      axios.get('http://localhost:8080/employees').then(response => {
        this.setState({employees: response.data});
        console.log(response);
      });
  }

  render() {
    const employees = this.state.employees.map(employee => {
      return <Employee key={employee.id} name={employee.name}></Employee>
    });
    
    return (
    <div className='App'>
      <form className='form-width m-auto'>
        <div className='form-group'>
          <label htmlFor='inputEmployeeName'>Emplyee Name</label>
          <input
            type='text'
            className='form-control'
            id='inputEmployeeName'
            placeholder='Name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='inputEmployeeEmail'>Emplyee email</label>
          <input
            type='email'
            className='form-control'
            id='inputEmployeeEmail'
            placeholder='Email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='inputEmployeePassword'>Employee Password</label>
          <input
            type='password'
            className='form-control'
            id='inputEmployeePassword'
            placeholder='Password'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Save Employee
        </button>
      </form>
      <hr />
      {employees}
    </div>
  );
  }
}

export default App;
