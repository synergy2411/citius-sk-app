import { Request, Response } from "express";
import { User } from "../model/user";
import { UserModel } from "../model/user.model";

const findUsers = async (req: Request, res: Response) => {
  // const limit = req.query.limit || null
  try {
    const allusers = await UserModel.find();
    // allusers.filter((user, index) => index < limit )
    return res.json(allusers);
  } catch (err) {
    console.log(err);
    return res.send(err).status(500);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    // const newUser = new UserModel(req.body)
    const { username, password, age, isAdmin, role } = req.body;
    let body: User = { username, password, age, isAdmin, role };
    const newUser = UserModel.createUser(body);
    const createdUser = await newUser.save();
    return res.json(createdUser).status(201);
  } catch (err : any) {
    console.log(err);
    return res.send({err : err.message}).status(500);
  }
};

const findUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const foundUser = await UserModel.findById(id);
    return res.send(foundUser);
  } catch (err) {
    console.log(err);
    return res.send(err).status(500);
  }
};

const findUserAndDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteResult = await UserModel.findByIdAndRemove(id);
    return res.send(deleteResult);
  } catch (err) {
    console.log(err);
    return res.send(err).status(500);
  }
};

const findUserAndUpdate = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updateResult = await UserModel.findByIdAndUpdate(id, req.body);
    return res.send(updateResult);
  } catch (err) {
    console.log(err);
    return res.send(err).status(500);
  }
};

export {
  findUsers,
  findUserById,
  createUser,
  findUserAndDelete,
  findUserAndUpdate,
};
