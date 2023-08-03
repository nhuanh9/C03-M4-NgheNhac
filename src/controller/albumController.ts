import albumService from "../service/albumService";

class AlbumController{
    findAll = async (req,res) => {
        let object = await albumService.findAll()
        res.json(object)
    }
    update = async (req,res) => {
        let object = await albumService.update(req.params.id, req.body)
        res.json(object)
    }
    delete = async (req, res) => {
        let data = await albumService.delete(req.params.id);
        res.json(data)
    }
    findById = async (req,res) => {
        let data = await albumService.findById(req.params.id)
        res.json(data)
    }
    add = async (req,res) => {
        let data = await albumService.add(req.body)
        res.json(data)
    }
}
export default new AlbumController()