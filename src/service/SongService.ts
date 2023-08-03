import {AppDataSource} from "../data-source";
import {Song} from "../entity/Song";
import {Service} from "./Service";

class SongService implements Service<Song> {
    private repository = AppDataSource.getRepository(Song);

    findAll = async () => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .leftJoinAndSelect("song.user","user")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "user.username"
            ])
            .getMany();
    }

    add = async (data) => {
        return await this.repository.save(data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }

    findById = async (id) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .leftJoinAndSelect("song.user","user")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "user.username"
            ])
            .where("song.id = :id",{id})
            .getMany();
    }

    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findAllByPlaylistId = async (idPlaylist) =>{
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.playlist","playlist")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "playlist.name",
                "playlist.imgUrl"
            ])
            .where("playlist.id = :idPlaylist",{idPlaylist})
            .getMany();
    }
    findOneByPlaylistId = async (idPlaylist, id) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.playlist","playlist")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "playlist.name",
                "playlist.imgUrl"
            ])
            .where("playlist.id = :idPlaylist",{idPlaylist})
            .andWhere("song.id = :id", {id})
            .getMany();
    }
    findAllByAlbumId = async (id) =>{
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "album.imgUrl",
                "album.singer"
            ])
            .where("album.id = :id",{id})
            .getMany();
    }
    findOneByAlbumId = async (idAlbum, id) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","Album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "album.imgUrl",
                "album.singer"
            ])
            .where("album.id = :idAlbum",{idAlbum})
            .andWhere("song.id = :id", {id})
            .getMany();
    }
}
export default new SongService();
