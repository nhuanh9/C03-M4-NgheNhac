import {Router} from "express";
import songRouter from "./SongRouter";
import {userRouter} from "./userRouter";
import playlistRouter from "./playlistRouter";
import albumRouter from "./albumRouter";

const router = Router();
router.use('/songs', songRouter);
router.use('/playlists', playlistRouter);
router.use('/album', albumRouter )
router.use('', userRouter);
export default router;
