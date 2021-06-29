import { useState, useEffect } from 'react';

function useCallApi(url) {
const [data, setData] = useState({})
const [error, setError] = useState(null)
const [loading, setLoading] = useState(false)

useEffect(()=>{
    setLoading(true)
  fetch(url)
  .then(response => response.json())
  .then(json => {
    
    setData(json)
    setLoading(false)
    })
  .catch(e => {
      
    setLoading(false)
    setError(e)
    
  })

},[])

 return [data ,error , loading]
}

export default useCallApi;
