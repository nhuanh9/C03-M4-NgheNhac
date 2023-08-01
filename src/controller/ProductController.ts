import productService from "../service/ProductService";

class ProductController {
    findAll = async (req, res) => {
        let list = await productService.findAll();
        res.json(list)
    }
    add = async (req, res) => {
        let data = await productService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await productService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await productService.delete(req.params.id);
        res.json(data)
    }
}

export default new ProductController();
