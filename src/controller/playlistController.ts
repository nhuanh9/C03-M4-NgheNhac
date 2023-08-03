import playlistService from "../service/playlistService";

class PlaylistController{
    findAll = async (req, res) => {
        let {username, asc, desc} = req.query
        if (username == undefined && asc == undefined && desc == undefined){
            let list = await playlistService.findAll();
            res.json(list)
        } else if (username != undefined && asc == undefined && desc == undefined){
            let list = await playlistService.findByUserName(username);
            res.json(list)
        } else if (username == undefined && asc == '' && desc == undefined){
            let list = await playlistService.getSortByAsc()
            res.json(list)
        } else if (username == undefined && asc == undefined && desc == ''){
            let list = await playlistService.getSortByDesc()
            res.json(list)
        }

    }
    add = async (req, res) => {
        let data = await playlistService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await playlistService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await playlistService.delete(req.params.id);
        res.json(data)
    }

}
export default new PlaylistController()