import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './src/routes';
import http from 'http';
import mongoose from "./src/mongoose";
import usersService from "./src/routes/users.service";
import dotenv from 'dotenv';
import authentication from "./src/authentication";
import cors from 'cors';

const app = express();

// mongodb connection
mongoose();

// loading dotenv
dotenv.config();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/users', usersService);
app.use('/authentication', authentication);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


const server = http.createServer(app);


server.listen(3030, () => {
    console.log('Server is running on port http://localhost:3030');
})

export default app;
