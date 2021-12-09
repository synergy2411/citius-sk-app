"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./db");
var morgan_1 = __importDefault(require("morgan"));
var user_routes_1 = require("./router/user.routes");
var app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use("/users", user_routes_1.UserRouter);
app.listen(9092, function () { return console.log("Server started at PORT :9092"); });
