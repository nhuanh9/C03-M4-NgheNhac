import {AppDataSource} from "../data-source";
import {Playlist} from "../entity/playlist";
import {Service} from "./Service";

class PlaylistService implements Service<Playlist>{

    private repository = AppDataSource.getRepository(Playlist)

    findAll = async () => {
        return await this.repository.createQueryBuilder("playlist")
            .leftJoinAndSelect("playlist.user","user")
            .select([
                "playlist.id",
                "playlist.name",
                "user.username"
            ])
            .getMany();
    }
    add = async (playlist) => {
        return await this.repository.save(playlist)
    }

    delete = async (playlistId) => {
        return await this.repository.delete(playlistId)
    }


    findById = async (id) => {
        return await this.repository.findOne({
            where: {
                id: id
            }
        })
    }

    update = async (id, data) => {
        return await this.repository.update(id,data)
    }

    findByUserName = async (username) => {
        return await this.repository.createQueryBuilder("playlist")
            .innerJoin("playlist.user","user")
            .select([
                "playlist.id",
                "playlist.name",
                "user.username"
            ])
            .where(`user.username = ${username}`)
            .getMany();
    }
}
export default new PlaylistService()