import songService from "../service/SongService";

class SongController {
    add = async (req, res) => {
        let data = await songService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await songService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await songService.delete(req.params.id);
        res.json(data)
    }
    findAllById = async (req,res) => {
        let {id, idPlaylist, idAlbum, idUser, songName} = req.query
        if (idPlaylist == undefined && id == undefined && idAlbum == undefined && idUser == undefined && songName == undefined){
            let data = await songService.findAll();
            res.json(data)
        } else if (idPlaylist != undefined && id == undefined && idAlbum == undefined && idUser == undefined && songName == undefined){
            let data = await songService.findAllByPlaylistId(idPlaylist)
            res.json(data)
        } else if (idPlaylist == undefined && id != undefined && idAlbum == undefined && idUser == undefined && songName == undefined) {
            let data = await songService.findById(id)
            res.json(data)
        } else if (idPlaylist != undefined && id != undefined && idAlbum == undefined && idUser == undefined && songName == undefined){
            let data = await songService.findOneByPlaylistId(Number(idPlaylist), Number(id))
            res.json(data)
        } else if (idPlaylist == undefined && id == undefined && idAlbum != undefined && idUser == undefined && songName == undefined){
            let data = await songService.findAllByAlbumId(idAlbum)
            res.json(data)
        } else if (idPlaylist == undefined && id != undefined && idAlbum != undefined && idUser == undefined && songName == undefined){
            let data = await songService.findOneByAlbumId(Number(idAlbum), Number(id))
            res.json(data)
        } else if (idPlaylist == undefined && id == undefined && idAlbum == undefined && idUser != undefined && songName == undefined){
            let data = await songService.findAllInPlaylistByUser(idUser)
            res.json(data)
        } else if (idPlaylist == undefined && id == undefined && idAlbum == undefined && idUser == undefined && songName != undefined){
            let data = await songService.findByName(songName)
            res.json(data)
        }
    }
}

export default new SongController();
