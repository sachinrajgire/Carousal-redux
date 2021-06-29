import React, { useState,useRef,useEffect } from 'react';
import './App.css';

function Refy() {

  const [page,setPage] =useState(1)
  const [data, setData] =useState([])
  const [totalPages, setTotalPages] =useState(null)
  console.log(data,'DATA ');
useEffect(()=>{
  fetch(`https://reqres.in/api/users?page=${page}`)

  .then(response => response.json())
         .then(json => {
             console.log(json,'json');
          //  this.setState({loading:false})
           setData(json.data)
           setTotalPages(json.total_pages)
         })
         .catch(e => {
          //  this.setState({loading:false})
          //  this.setState({error:e})
         })

},[page])


  return (
    <div className="App">
    {data && data.length>0 && data.map(i=>{
     return (
       <ul>
        <li>{i.first_name}</li> 
     </ul>

     )
    })}
    {/* {new [...Array]. */}
    <button>Next</button>
    <button>Previous</button>
    </div>
  );
}

export default Refy;

// Only make call once 
// already fetched -- Dont make the network ( use the u already have )

// data --concat data --Concat the data from second page to first page locally
// If local data does use otherwise make a call 
// localStorage / SessionStorage
// React.Context --
// Redux 
