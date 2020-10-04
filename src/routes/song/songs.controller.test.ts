import express from "express"
import supertest from "supertest"
import songs from "./song.controller"
import { getManager } from "typeorm"
import { Song } from "../../entity/song"
import { createConnection } from "typeorm"

let app

beforeEach(async () => {
  app = express()
  await createConnection()
  app.use(songs)
})

test("delete", async () => {
  const songRepository = getManager().getRepository(Song)
  const newSong = await songRepository.create({ artist: "Unai", title: "kill all capitalists" }).save()
  // const savedSong = await songRepository.save(newSong)
  const res = await supertest(app).delete(`/song/${newSong.id}`);
  expect(res.body).toEqual({ ok: true, message: "Deleted" })
})