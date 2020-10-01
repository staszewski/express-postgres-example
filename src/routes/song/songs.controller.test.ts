import express from "express"
import supertest from "supertest"
import songs from "./song.controller"

let app

beforeEach(() => {
  app = express()
  app.use(songs)
})

test("example test of supertest", async () => {
  const res = await supertest(app).get('/');
  expect(res.body.status).toEqual('ok')
})
