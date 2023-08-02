import {Router} from "express";
import songRouter from "./SongRouter";
import {userRouter} from "./userRouter";
import playlistRouter from "./playlistRouter";

const router = Router();
router.use('/songs', songRouter);
router.use('/playlists', playlistRouter);
router.use('', userRouter);
export default router;
