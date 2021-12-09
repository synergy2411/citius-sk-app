import { Document, Model } from "mongoose";

export interface User {
    username : string;
    password : string;
    age : number;
    isAdmin? : boolean,
    role? : string;
}

export interface IUserDoc extends Document{
    username : string;
    password : string;
    age : number;
    isAdmin? : boolean;
    role? : string;
}

export interface IUserModel extends Model<IUserDoc>{
    createUser (user : User) : IUserDoc
}