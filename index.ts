import express from 'express';
import bodyParser from "body-parser";
import {AppDataSource} from "./src/data-source";
import router from "./src/router/Router";
import cors from 'cors'

const app = express();

AppDataSource.initialize().then(() => {
    console.log('Connect database success')
})
app.use(cors());
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('', router)
app.listen(3000, () => {
    console.log('Server is running')
})

//npm i -D typescript tsc tsc-watch rimraf @types/express
//npm run start:dev
