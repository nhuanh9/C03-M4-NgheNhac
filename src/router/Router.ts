import {Router} from "express";
import songRouter from "./SongRouter";
import {userRouter} from "./userRouter";

const router = Router();
router.use('/songs', songRouter);
router.use('', userRouter);
export default router;
