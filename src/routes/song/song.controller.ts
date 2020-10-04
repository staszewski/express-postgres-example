import express from "express"
import { postSongAction, getSongById, getAllSongs, deleteSongById, updateSongById } from "./song.service"

const router = express.Router()

router.get("/", async (req, res) => {
  await getAllSongs(req, res)
})

router.post("/", async (req, res) => {
  await postSongAction(req, res)
})

router.get("/song/:id", async (req, res) => {
  await getSongById(req, res) 
})

router.delete("/song/:id", async (req, res) => {
  await deleteSongById(req, res)
})

router.patch("/song/:id", async (req, res) => {
  await updateSongById(req, res)
})

export default router