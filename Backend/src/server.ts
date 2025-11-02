import express, { Request, Response } from "express";
import cors from "cors";

const app = express()

app.use(cors())
app.use(express.json())

interface User {
  id :number,
  name : string,
  Job : string
}

let users : User[] = [
  {
  id: 1,
  name: "John",
  Job : "web developer"
}
]

app.get("/api/users", (req : Request, res : Response) => {
  res.json(users)
})

// app.post("/users" , (req ,res)=>{
//   const newUser = {
//     id : users.length + 1,
//     name : req.body.name,
//     Job : req.body.Job
//   }
//   users.push(newUser)
//   res.status(201).json(newUser)
// })

// app.listen(5000, () => console.log("Server is running on port 5000"))
export default app