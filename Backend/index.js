const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

let users = [
  {
  id: 1,
  name: "John",
  Job : "web developer"
}
]

app.get("/api/users", (req, res) => {
  res.json(users)
})

app.post("/users" , (req ,res)=>{
  const newUser = {
    id : users.length + 1,
    name : req.body.name,
    Job : req.body.Job
  }
  users.push(newUser)
  res.status(201).json(newUser)
})

app.listen(5000, () => console.log("Server is running on port 5000"))
