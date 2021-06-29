import './App.css';
import ImageSlider from './components/ImageSlider';
import {Data} from './components/Data';
import DataDance from './components/DataDance';
import { useState, useEffect } from 'react';
import useCallApi from './CustomHooks/useCallApi';
// import Appy from './Appy'
import Refy from './Refy'
import Pagination from './Pagination'
function App() {
// const [todo, setTodo] = useState({})
// const [data,error,loading] = useCallApi('https://jsonplaceholder.typicode.com/todos/1')

// console.log(data,error,loading,'data error loading');
// useEffect(()=>{
//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => setTodo(json))

// },[])
// if(loading){
//   return 'LOADING'
// }

  return (
    <div className="App">
      {/* <ImageSlider slides={Data} className="image"/> */}
       {/* <h1>{data && data.title}</h1> */}

       {/* <DataDance /> */}
       
       {/* <Appy 
       isValid={true}
       existingCustomer={true}
       /> */}
 
      <Pagination />

    </div>
  );
}

export default App;
