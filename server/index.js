import dotenv from 'dotenv';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'https://blog-website-sage-iota.vercel.app',  
    methods: 'GET,POST,PUT,DELETE',
    credentials: true  
}));
  
app.post('/login', (req, res) => {
    res.send('Login successful');
});
  
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
