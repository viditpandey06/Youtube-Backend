import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();
//when we write (req,res) it is not complete in total we have total 4 options in express
//1. req -> request object
//2. res -> response object
//3. next -> next middleware
//4. err -> error object
// the format for all these is (err,req,res,next)





//app.use is used when we want to use middleware in  the application
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
//to store data from form or json data in the req.body
app.use(express.json({
    limit: '20kb'
}));
// to understand url by express app
app.use(express.urlencoded({extendeed: true, limit: '20kb'}));
//to store static content like css, images, etc in the public folder
app.use(express.static('public'));








export default app;