import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReactCRUD() {
  const [name, setName] = useState('');

  const handleReq = async () => {
    try {
      const URL = await axios.get("http://localhost:5000/api/users");
      const res = URL.data
      setName(res.name);
    } catch (err) {
      console.log("The error is:", err);
    }
  };

  useEffect(() => {
    handleReq
  }, []);

  return (
    <>
      <h1>Users</h1>
      <h2>{name}</h2>
      <button onClick={handleReq}>Get</button>
    </>
  );
}

export default ReactCRUD;
