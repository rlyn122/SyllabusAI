import express from "express";
import {PORT, URL} from "./config.js";
import mongoose from "mongoose"
import booksRoute from './routes/booksRoute.js';

const app = express();

//middleware for parsing request body
app.use(express.json())

app.use(cors({
        origin: 'http://localhost:3000',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: ['Content-Type'],
    }
))

app.get('/', (request, response) => {
    return response.status(234).send('Hello World!');
  });

app.use('/books', booksRoute);


mongoose
    .connect(URL)
    .then(()=>{
        console.log(`App is connected to the database`)
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
            });
    })
    .catch((error)=>{
        console.log(error)
    })