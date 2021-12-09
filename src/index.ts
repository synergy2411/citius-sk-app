import express from 'express';
import cors from 'cors';
import './db';
import morgan from 'morgan';
import { UserRouter } from './router/user.routes';

const app = express()
app.use(cors())
const PORT = process.env.PORT || 9092;
app.use(morgan('dev'))

app.use(express.json())

app.use("/users", UserRouter)

app.listen(PORT, () => console.log("Server started at PORT :"+ PORT))
