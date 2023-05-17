import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 8000;
// Note: type can be inferred. Type annotation below are optional. 
const app = express();
app.use(cors());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.status(200).send('Hello, world!');
});
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
