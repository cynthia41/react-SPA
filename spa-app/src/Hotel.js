import React from 'react';
import Customer from './Customer';

function Hotel() {
  const name = 'John';
  const age = 30;

  return (
    <div>
      <Customer name={name} age={age} />
    </div>
  );
}
export default Hotel