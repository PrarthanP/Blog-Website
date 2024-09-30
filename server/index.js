import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();


const app = express();
app.use(cors({
    origin : ['http://localhost:3000', 'https://blog-website-sage-iota.vercel.app'],
    methods : ['GET, POST, PUT, DELETE'],
    credentials: true,
}));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
