import {Router} from "express";
import songController from "../controller/SongController";
import {auth} from "../middleware/jwt";

const songRouter = Router();
songRouter.use(auth)
songRouter.get('', songController.findAll);
songRouter.post('', songController.add);
songRouter.put('/:id', songController.update);
songRouter.delete('/:id', songController.delete);
export default songRouter;
