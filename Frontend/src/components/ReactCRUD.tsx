import { useEffect, useState } from "react";
import axios from "axios";

function ReactCRUD() {

  interface User {
    id: number;
    name: string;
    Job: string;
  }


  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

 
  const addUser = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/users", {
        name: name || "default value",
        Job: job || "you didnt enter",
      });
      console.log("User added:", res.data);
      getUsers(); 
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Users</h1>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Job"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.Job}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReactCRUD;
