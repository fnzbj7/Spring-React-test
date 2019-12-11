import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Employee from './Employee/Employee';

class App extends Component {

  state = {};

  searchHandler = () => {
    const name = this.state.searchInput;
    axios.get(`http://localhost:8080/employees/name/${name}`).then(response => {
      this.setState({ employee: response.data, searchpushed: true });
      console.log(response);
    });
  };

  deleteHandler = () => {
    let id = this.state.employee.id;
    this.setState({ employee: null, searchpushed: false });
    axios.delete(`http://localhost:8080/employees/${id}`).then(resp => {
      console.log(resp);
    });
  };

  nameSearchHandler = e => {
    this.setState({ searchInput: e.target.value });
  };

  nameHandler = e => {
    this.setState({ nameInput: e.target.value });
  };

  ageHandler = e => {
    this.setState({ ageInput: e.target.value });
  };

  emailHandler = e => {
    this.setState({ emailInput: e.target.value });
  };

  nameClickHandler = () => {
    if (this.state.nameInput && this.state.ageInput && this.state.emailInput) {
      axios
        .post('http://localhost:8080/employees', {
          name: this.state.nameInput,
          age: this.state.ageInput,
          email: this.state.emailInput
        })
        .then(resp => {
            this.setState({saveMessage: 'Employee is saved!'});
        }).catch( ()=> {
            this.setState({saveMessage: 'There is an employee saved with this name!'});
        });
    } else {
        this.setState({saveMessage: 'All input need to be filled!'});
    }
  };

  render() {
    let employees = null;
    if (this.state.employee) {
      employees = (
        <Employee
          id={this.state.employee.id}
          name={this.state.employee.name}
          deleteHandler={this.deleteHandler}
          age={this.state.employee.age}
          email={this.state.employee.email}
        ></Employee>
      );
    } else if(this.state.searchpushed) {
        employees = <p>There is no Employee with thisd name!</p>
    }

    return (
      <div className='App'>
        <form className='form-width m-auto'>
          <div className='form-group'>
            <label htmlFor='inputEmployeeName'>Emplyee Name</label>
            <input
              onChange={this.nameHandler}
              type='text'
              className='form-control'
              id='inputEmployeeName'
              placeholder='Name'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='inputEmployeeAge'>Emplyee age</label>
            <input
              onChange={this.ageHandler}
              type='number'
              className='form-control'
              id='inputEmployeeAge'
              placeholder='Age'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='inputEmployeeEmail'>Emplyee email</label>
            <input
              onChange={this.emailHandler}
              type='email'
              className='form-control'
              id='inputEmployeeEmail'
              placeholder='Email'
            />
          </div>
          <button
            onClick={this.nameClickHandler}
            type='button'
            className='btn btn-primary'
          >
            Save Employee
          </button>
        <p>{this.state.saveMessage}</p>
        </form>
        <hr />
        <form className='form-width mx-auto mb-5'>
          <div className='form-group'>
            <label htmlFor='inputEmployeePassword'>
              Employee Name to search
            </label>
            <input
              type='text'
              className='form-control'
              id='inputEmployeeNameSearch'
              placeholder='Name to search'
              onChange={this.nameSearchHandler}
            />
          </div>
          <button
            onClick={this.searchHandler}
            className='btn btn-primary'
            type='button'
          >
            Search
          </button>
        </form>
        {employees}
      </div>
    );
  }
}

export default App;
