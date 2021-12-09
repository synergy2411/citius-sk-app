"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
// const mongoURI = "mongodb://localhost:27017/citius-db";
var mongoURI = "mongodb+srv://citius:0LXwebyFsFLhDmt2@cluster0.e9xsq.mongodb.net/citius-db?retryWrites=true&w=majority";
mongoose_1.default.connect(mongoURI)
    .then(function (client) { return console.log("Mongo Connected"); })
    .catch(console.log);
