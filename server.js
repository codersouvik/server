import express from "express";
import dotenv from "dotenv";
import { Connection } from "./database/db.js";
import Defaultdata from "./default.js";
import Routes from "./routes/router.js";
import  cors from "cors";
import bodyParser from 'body-parser';

dotenv.config();
const app=express();




const PORT=process.env.PORT || 8000;

const User=process.env.DB_USERNAME;
const Pass=process.env.DB_PASSWORD;
const URL=process.env.MONGODB_URI || `mongodb+srv://${User}:${Pass}@cluster0.chagvjy.mongodb.net/cluster0?retryWrites=true&w=majority`

Connection(URL);


app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`))

Defaultdata();



app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);



