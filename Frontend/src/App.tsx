import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [name , setName] = useState()
  const handleReq = async ()=>{
    try{
      const URL =  await axios.get("http://localhost:5000/api/users")
    const res = URL.data
    setName(res.name)
    }catch(err){
      console.log("the error are : " , err)
    }

  } 
  useEffect(()=>{
     handleReq
  },[])

  return (
    <>
      <h1>users</h1>
      <h2>{name}</h2>
      <button onClick={()=>handleReq()}>get</button>
    </>
  )
}

export default App
