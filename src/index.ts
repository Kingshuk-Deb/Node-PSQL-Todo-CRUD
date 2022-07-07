import express, { Application } from "express";
import compression from "compression";
import morgan from 'morgan';
import Route  from './routes';
require('dotenv').config();

const app: Application = express();

app.use(express.urlencoded({ extended: true }));     
app.use(morgan('tiny'));
app.use(express.json()); 
app.use(compression());

app.use('/api/v1/user', Route.UserRoutes)
app.use('/api/v1/todo', Route.TodoRoutes)

app.listen(process.env.PORT, () => { console.log(`🚀 Server Running On PORT => ${process.env.PORT} 🖥️ !!`) });