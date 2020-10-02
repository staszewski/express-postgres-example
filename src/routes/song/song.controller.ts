import express from "express"
import { postSongAction } from "./song.service"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({ status: "ok" })
})

router.post("/", async (req, res) => {
  await postSongAction(req, res)
})

export default router
