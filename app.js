require("dotenv").config();
require("express-async-errors");
require("http-status-codes")
const mongoose=require('mongoose')
const connect=require("./db/connect")
const router=require("./routes/routes")
const notFound = require("./middlewares/notfound");
const errorHandler = require("./middlewares/errorHandler");
const express = require("express");
const home=require("./middlewares/homePage")
const app = express();

app.use('/',home)
app.use(express.json());
app.use('/api/v1',router)


app.use(notFound);
app.use(errorHandler);
const start=()=>{
    try {
        connect(process.env.MONGO_URI)
        app.listen(3002,console.log('Server running on port 3002'))
    } catch (error) {
        console.log("couldn't spinn up the server")
    }
}
start()