import React, {useState} from "react";
import './App.css';

function App() {
  const [num, setNum]=useState(0);
  const incNumber= ()=>{
   setNum(num+1)
  };
  const decNumber=()=>{
    if (num>0){
    setNum(num-1)}
    else{alert("Sorry, Zero Limit Reached") (setNum(0))} 
  };
   const reset = () =>{
     setNum(0)
   }; 
  return (
    
  <div className="main-div">
    <div className="center-div">
      <h1 className="counter">COUNTER APP</h1>
        <h1>{num}</h1>
       <div className="btn-div">
        <button onClick={incNumber}>Increment</button>
        <button onClick={decNumber}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  </div>
  
  );
} 

export default App;
