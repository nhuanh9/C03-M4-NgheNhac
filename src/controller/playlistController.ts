import playlistService from "../service/playlistService";

class PlaylistController{
    findAll = async (req, res) => {
        let list = await playlistService.findAll();
        res.json(list)
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
    findByUserName = async (req, res) => {
        let list = await playlistService.findByUserName(req.query.username);
        res.json(list)
    }
}
export default new PlaylistController()