import { Request, Response } from "express"
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
    response.send({ok: false, message: "Not Found"})
  }
}
