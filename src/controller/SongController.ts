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
        let {id, idPlaylist} = req.query
        if (idPlaylist == undefined && id == undefined){
            let list = await songService.findAll();
            res.json(list)
        } else if (idPlaylist != undefined && id == undefined){
            let data = await songService.findAllByPlaylistId(idPlaylist)
            res.json(data)
        } else if (idPlaylist == undefined && id != undefined) {
            let data = await songService.findById(id)
            res.json(data)
        } else if (idPlaylist != undefined && id != undefined){
            let data = await songService.findOneByPlaylistId(Number(idPlaylist), Number(id))
            res.json(data)
        }
    }
}

export default new SongController();
