import mongoose from 'mongoose';

// const mongoURI = "mongodb://localhost:27017/citius-db";
const mongoURI = "mongodb+srv://citius:0LXwebyFsFLhDmt2@cluster0.e9xsq.mongodb.net/citius-db?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
    .then(client => console.log("Mongo Connected"))
    .catch(console.log)