import { Request, response, Response } from "express"
import { request } from "http"
import { getManager } from "typeorm"
import { Song } from "../../entity/song"

export const postSongAction = async (request: Request, response: Response) => {
  const songRepository = getManager().getRepository(Song)
  const newSong = songRepository.create(request.body)
  await songRepository.save(newSong)
  response.send(newSong)
}

export const getSongById = async (request: Request, response: Response) => {
  const songRepository = getManager().getRepository(Song)
  try {
    response.send(await songRepository.findOneOrFail({ where: { id: request.params.id } }))
  } catch (error) {
    response.status(404)
    response.send({ ok: false, message: "Not Found" })
  }
}

export const getAllSongs = async (request: Request, response: Response) => {
  const songRepository = getManager().getRepository(Song)
  const allSongs = await songRepository.find()
  response.send(allSongs)
}

export const deleteSongById = async (request: Request, response: Response) => {
  const songRepository = getManager().getRepository(Song)
  await songRepository.delete(request.params.id)
  response.send({ok: true, message: "Deleted"})
}

export const updateSongById = async (request: Request, response: Response) => {
  const songRepository = getManager().getRepository(Song) 
  await songRepository.update(request.params.id, request.body)
  const song = await songRepository.findOneOrFail({ where: { id: request.params.id } })
  response.send(song)
}