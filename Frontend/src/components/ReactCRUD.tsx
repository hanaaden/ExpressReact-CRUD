import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReactCRUD() {
  const [name, setName] = useState('');
  const [job , setJob] = useState('')

  const handleReq = async () => {
    try {
      const URL = await axios.get("http://localhost:3000/api/users");
      const res = URL.data
       setName(res[0].name);
      setJob(res[0].Job)
     
    } catch (err) {
      console.log("The error is:", err);
    }
  };

  //  const getUsers = async ()=>{
  //   axios.post('http://localhost:5000/api/users' ,
  //     {
  //        name : "Anon",
  //        Job : "graphic designer"

  //     }
  //   )
    
  //  }
  useEffect(() => {
    handleReq()
    // getUsers
  }, []);

  return (
    <>
      <h1>Users</h1>
      <h2>{name}</h2>
      <h2>{job}</h2>
      
      {/* <button onClick={getUsers}>get All users</button> */}
    </>
  );
}

export default ReactCRUD;
