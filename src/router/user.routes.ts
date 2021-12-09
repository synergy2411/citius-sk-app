import express from 'express';
import { createUser, findUserAndDelete, findUserAndUpdate, findUserById, findUsers } from '../controller/user.controller';

const UserRouter = express.Router()

UserRouter.route("/")
    .get(findUsers)
    .post(createUser)

UserRouter.route("/:id")
    .get(findUserById)
    .delete(findUserAndDelete)
    .patch(findUserAndUpdate)

export { UserRouter }