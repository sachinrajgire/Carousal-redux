import React, { useRef,useEffect } from 'react';
import './App.css';

function Refy() {
  const inputEl = useRef(null);

useEffect(()=>{
  console.log(inputEl.current ,'CURRENT');
  inputEl.current.focus();
},[])


  return (
    <div className="App">
     
      <label>Input 1 </label>
      <input type='text'/>

      <label>Input 2</label>
      <input type='text'/>

      <label  >Input 3 </label>
      <input ref={inputEl} type='text' />
      <button>Focus the input</button>
    </div>
  );
}

export default Refy;


