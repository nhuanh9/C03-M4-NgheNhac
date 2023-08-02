import songService from "../service/SongService";

class SongController {
    findAll = async (req, res) => {
        let list = await songService.findAll();
        res.json(list)
    }
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
    findById = async (req,res) => {
        let data = await songService.findById(req.params.id)
        res.json(data)
    }
}

export default new SongController();
