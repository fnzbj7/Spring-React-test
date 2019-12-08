import React, { Component } from 'react';
import './App.css';
import Employee from './Employee/Employee';

class App extends Component {

  state = {
    employees: [
      { name: 'Peti', age: 30},
      { name: 'Sanyika', age: 24}
    ]
  };

  render() {return (
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
      <Employee name={this.state.employees[0].name} age={this.state.employees[0].age}>Csak megjelenik</Employee>
    </div>
  );
  }
}

export default App;
