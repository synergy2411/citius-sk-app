"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../controller/user.controller");
var UserRouter = express_1.default.Router();
exports.UserRouter = UserRouter;
UserRouter.route("/")
    .get(user_controller_1.findUsers)
    .post(user_controller_1.createUser);
UserRouter.route("/:id")
    .get(user_controller_1.findUserById)
    .delete(user_controller_1.findUserAndDelete)
    .patch(user_controller_1.findUserAndUpdate);
