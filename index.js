import express from 'express';
import { Connection } from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
const app = express();
const port = 8000;
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuid } from 'uuid';
dotenv.config();
import path from "path";

import DefaultData from './default.js';

const user = process.env.USER;
const password = process.env.PASSWORD;

// Connect to the database
Connection(user, password);

// Middleware to parse JSON requests

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);


app.listen(port, () =>
    console.log(`Server listening on ${port}`)
);
