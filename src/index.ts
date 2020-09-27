import express from "express"
import cors from "cors"
import { createConnection } from "typeorm"


const app = express()

app.use(cors())
app.use(express.json())

const PORT = 8000

// app.get("/", (req, res) => res.json({ msg: "Express + TypeScript Server" }))

;(async () => {
  try {
    await createConnection()
    console.log("connected to DB")
  } catch (e) {
    console.log(e)
  }
  // Start web server
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
  })
})()
