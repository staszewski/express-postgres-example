import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 8000

app.get("/", (req, res) => res.json({ msg: "Express + TypeScript Server" }))

app.post("/login", (req, res, next) => {
  console.log(req.body)
  if (
    req.body.username &&
    req.body.username === "user" &&
    req.body.password &&
    req.body.password === "pass"
  ) {
    res.json({ msg: "success" })
  } else {
    res.json({ msg: "fail" })
  }
})

app.get("/secure", (req, res) => res.json({ msg: "Login secured!!!" }))

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
