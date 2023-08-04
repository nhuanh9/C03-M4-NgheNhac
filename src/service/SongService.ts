import {AppDataSource} from "../data-source";
import {Song} from "../entity/Song";
import {Service} from "./Service";

class SongService implements Service<Song> {
    private repository = AppDataSource.getRepository(Song);

    findAll = async () => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
            .getMany();
    }

    add = async (data) => {
        return await this.repository.save(data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }
    findByName = async (name) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
            .where("song.name LIKE :name", { name: `%${name}%` })
            .getMany();
    }
    findBySingerName = async (singerName) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
            .where("song.singer LIKE :name", { name: `%${singerName}%` })
            .getMany();
    }
    findByAlbumName = async (albumName) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
            .where("album.name LIKE :name", { name: `%${albumName}%` })
            .getMany();
    }
    findByMusicianName = async (musicianName) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
            ])
            .where("song.musician LIKE :name", { name: `%${musicianName}%` })
            .getMany();
    }

    findById = async (id) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name"
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
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
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
    findAllInPlaylistByUser = async (userId) => {
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.playlist", "playlist")
            .leftJoinAndSelect("playlist.user", "user")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "album.singer",
                "playlist.name",
                "playlist.imgUrl",
                "playlist.description",
                "user.username",
                "user.imgUrl"
            ])
            .where("user.id = :userId", {userId})
            .getMany()
    }
    findNotInPlaylistId = async (idPlaylist, id) =>{
        return await this.repository.createQueryBuilder("song")
            .leftJoinAndSelect("song.playlist","playlist")
            .leftJoinAndSelect("song.album","album")
            .select([
                "song.id",
                "song.name",
                "song.singer",
                "song.musician",
                "song.songUrl",
                "song.imageUrl",
                "album.name",
                "playlist.name",
                "playlist.imgUrl"
            ])
            .where("playlist.id <> :idPlaylist",{idPlaylist})
            .getMany();
    }
}
export default new SongService();
