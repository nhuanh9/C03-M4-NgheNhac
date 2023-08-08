import playlistSongService from "../service/playlistSongService";

class PlaylistSongController{
    findAll = async (req,res) =>{
        let {idSong, idPlaylist, userId} = req.query
        if (idSong == undefined && idPlaylist == undefined && userId == undefined){
            console.log(1)
            let data = await playlistSongService.findAll()
            res.json(data)
        } else if (idSong == undefined && idPlaylist == undefined && userId != undefined){
            console.log(2)
            let data = await playlistSongService.findAllSongInPlaylistByUser(userId)
            res.json(data)
        } else if (idSong == undefined && idPlaylist != undefined && userId == undefined){
            console.log(3)
            let data = await playlistSongService.findAllSongByPlaylistId(idPlaylist)
            res.json(data)
        } else if (idSong != undefined && idPlaylist != undefined && userId == undefined){
            if(idSong == 0){
                console.log(4)
                let data = await playlistSongService.findSongNotInPlaylistId(Number(idPlaylist), Number(idSong))
                res.json(data)
            } else {
                console.log(5)
                let data = await playlistSongService.findOneSongByPlaylistId(Number(idPlaylist), Number(idSong))
                res.json(data)
            }
        }
    }
    add = async (req,res) =>{
        await playlistSongService.add(req.body)
        res.json('complete')
    }
    delete = async (req,res) =>{
        await playlistSongService.delete(req.params.id)
        res.json('delete complete')
    }
    findById = async (req,res) => {
        let data = await playlistSongService.findById(req.params.id)
        res.json(data)
    }
    update = async(req,res) => {
        let data = await playlistSongService.update(req.params.id, req.body)
        res.json(data)
    }
}
export default new PlaylistSongController()