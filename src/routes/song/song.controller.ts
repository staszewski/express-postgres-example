import express from "express"
import { postSongAction, getSongById } from "./song.service"

const router = express.Router()

router.post("/", async (req, res) => {
  await postSongAction(req, res)
})

router.get("/:id", async (req, res) => {
  await getSongById(req, res) 
})

export default router
