import express from "express";
import {PORT} from "./config.js"
import mongoose from 'mongoose';


const app= express();
app.use(express.json());

app.get('/', (request,response) => {
    console.log(request)
    return response.status(234).send('Welcome To MERN Tutorial')
});



mongoose
.connect('mongodb+srv://root:root@book-store-MERN.obtxdue.mongodb.net/books-collection?ssl=true&w=majority')

  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

