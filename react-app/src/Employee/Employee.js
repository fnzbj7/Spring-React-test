import React, { Component } from 'react';

class Employee extends Component {

  

  render() {
    return (
      <div>
        <p>
          I'm {this.props.name} and {this.props.age} year old.<br/>
          My email address is: {this.props.email}
        </p>
        <p>{this.props.children}</p>
        <button onClick={this.props.deleteHandler} className="btn btn-danger">Delete</button>
      </div>
    );
  }

}

export default Employee;
