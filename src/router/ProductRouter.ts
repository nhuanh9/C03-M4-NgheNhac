import {Router} from "express";
import productController from "../controller/ProductController";
import {auth} from "../middleware/jwt";

const productRouter = Router();
productRouter.use(auth)
productRouter.get('', productController.findAll);
productRouter.post('', productController.add);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);
export default productRouter;
