import bcrypt from 'bcryptjs';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import './db';
import { UserRouter } from './router/user.routes';


const hashedPAssword = bcrypt.hashSync("MyPassword", 10);
console.log(hashedPAssword);

const isMatched = bcrypt.compareSync("MyPassword123", hashedPAssword)
console.log(isMatched)

const app = express()
app.use(cors())
const PORT = process.env.PORT || 9092;
app.use(morgan('dev'))

app.use(express.json())

app.use("/users", UserRouter)

app.listen(PORT, () => console.log("Server started at PORT -"+ PORT))
