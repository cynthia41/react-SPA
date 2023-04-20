
import React, {useState} from 'react';
import hotel from './hotel.jpg';
import Customer from './Customer'
import Hotel from './Hotel'
import './index.css'
function Button() { 
  const [count, setCount] = useState(0);

function handleClick() {
  setCount(count +1);
  alert(`this button was clicked ${count} times`)
}
return (
  <button onClick={handleClick}>click here</button>
);
}

function App() {

  function handleChange(event) {
    console.log(event.target.value)
  }
  
  
  return (
    <div> 
      <h1>Welcome to paradise</h1>
      <input type="text" placeholder="type in details" onChange={handleChange} /> <br />
      <img src={hotel} alt="welcome to the hotel" /> <br />
      <Customer />
      <Hotel />
      <Button />
      
    </div>
  );
}
export default App