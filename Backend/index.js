const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

let users = {
  id: 1,
  name: "John",
}

app.get("/api/users", (req, res) => {
  res.json(users)
})

app.listen(5000, () => console.log("Server is running on port 5000"))
