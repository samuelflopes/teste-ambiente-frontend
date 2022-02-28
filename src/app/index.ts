import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { router } from './routes';

const app = express();

app.use(cors());
app.options('*', cors);
app.use(express.json());
app.use(router)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const port = process.env.PORT || 3333;

app.listen(port);

console.log(`Porta utilizada => ${port}`);
