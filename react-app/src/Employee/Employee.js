import React from 'react';

const employee = props => {
  return (
    <div>
      <p>
        I'm a {props.name} and {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default employee;
