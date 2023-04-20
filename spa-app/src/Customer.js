import React from 'react';

function Customer(props) {
  return (
    <div>
      <p>Customer Name: {props.name}</p>
      <p>Customer Age: {props.age}</p>
      
    </div>
  );
}
export default Customer