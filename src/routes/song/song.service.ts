import { Request, Response } from "express"
import { getManager } from "typeorm"
import { Song } from "../../entity/song"

export const postSongAction = async (request: Request, response: Response) => {
  const songRepository = getManager().getRepository(Song)
  const newSong = songRepository.create(request.body)
  await songRepository.save(newSong)
  response.send(newSong)
}
