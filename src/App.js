import axios from 'axios'
import React, { useEffect,useState } from 'react'


function App() {
  const[isUsers,setIsUsers]=useState(undefined);
  useEffect(()=>{
    let Task=async()=>{
      let response= await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");

   setIsUsers(response.data); 
  
  } 
  Task()
},[]);
  return (
    <div className="App">
      {isUsers&&<div>{isUsers.time.updated}</div>}
      </div>
  );
}

export default App;
