import { UserDAO } from "../daos/userDao.js";
import { jwtSign, jwtVerify } from "../utils/jwtUtils.js";
import { stringIsFilled } from "../utils/stringUtil.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { emailIsValid, REGEX } from "../utils/regexUtils.js";
import { isAdmin } from "../utils/adminUtils.js";

const signUp = async (req, res) => {
  try {
    const roleId = 1;
    const password = await bcrypt.hash(req.body.password, 10);
    const {
      email,
      username,
      name,
      last_name,
      dob,
      adress,
      city,
      planet,
      galaxy,
      wallet,
      img,
    } = req.body;
    if (!emailIsValid(email)) {
      return res.status(400).json({ message: `email is the wrong format` });
    }
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({
        message: `an account is already linked to this adress : ${email}`,
      });
    }
    if (
      !email ||
      !password ||
      !username ||
      !name ||
      !last_name ||
      !dob ||
      !adress ||
      !city
    ) {
      return res
        .status(400)
        .json({ message: `Sorry, all fields are mandatory` });
    }
    const user = await UserDAO.Create(
      email,
      password,
      username,
      name,
      last_name,
      dob,
      adress,
      city,
      planet,
      galaxy,
      wallet,
      img,
      roleId
    );

    const id = user.id;
    const token = jwtSign(id);
    return res.status(201).json({
      message: `user ${user.username} successfully created`,
      data: user,
      token,
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: `internal error`, data: err });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!stringIsFilled(email) || !stringIsFilled(password)) {
    return res.status(403).json({ message: `missing field` });
  }
  const user = await UserDAO.ReadUserByEmail(email);
  if (!user) {
    return res.status(404).json({ message: `could not find user` });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: `invalid password or email` });
  }
  if (user && isPasswordValid) {
    const token = jwtSign(user.id);
    console.log(user);
    return res.status(201).json({
      message: `user ${user.username} successfully connected`,
      data: user.email,
      token,
    });
  } else {
    return res.status(401).json({ message: `login unsuccessful` });
  }
};

const readAll = async (req, res) => {
  const token = req.headers.authorization;
  const admin = await isAdmin(token);
  if (admin === 1) {
    return res.status(401).json({ message: `user not allowed to this data` });
  }
  const users = await UserDAO.ReadAllUsers();
  if (!users) {
    return res.status(404).json({ message: `could not find users` });
  }
  return res
    .status(200)
    .json({ message: `users list successfully retrieved`, data: users });
};

const readOne = async (req, res) => {
  const token = req.headers.authorization;
  if (!isAdmin(token)) {
    return res.status(401).json({ message: `user not allowed to this data` });
  }
  const id = req.params.id;
  const user = await UserDAO.ReadUserById(id);
  if (!user) {
    return res.status(404).json({ message: `could not find user` });
  }
  return res
    .status(200)
    .json({ message: `user ${user.username} successfully found`, data: user });
};
const getUser = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
      .status(403)
      .json({ message: `lacking authorization, please log-in` });
  }
  const id = jwtVerify(token);
  const user = await UserDAO.ReadUserById(id);
  if (!user) {
    return res.status(404).json({ message: `cannot find user` });
  }
  return res.status(200).json({ message: `user successfully retrieved`, user });
};

const updateOne = async (req, res) => {
  const id = req.params.id;
  const {
    email,
    password,
    username,
    name,
    last_name,
    dob,
    adress,
    city,
    planet,
    galaxy,
    wallet,
    img,
  } = req.body;
  if (
    !email ||
    !password ||
    !username ||
    !name ||
    !last_name ||
    !dob ||
    !adress ||
    !city ||
    !img
  ) {
    return res.status(400).json({ message: `could not update data` });
  }
  const data = {
    email,
    password,
    username,
    name,
    last_name,
    dob,
    adress,
    city,
    planet,
    galaxy,
    wallet,
    img,
  };
  const user = await UserDAO.UpdateUser(id, data);
  if (!user) {
    return res.status(404).json({ message: `could not find user` });
  }
  return res.status(200).json({
    message: `user ${user.username} successfully updated`,
    data: user,
  });
};

const deleteOne = async (req, res) => {
  const id = req.params.id;
  const user = await UserDAO.DeleteUser(id);
  if (!user) {
    return res.status(404).json({ message: `could not find user` });
  } else {
    return res.status(200).json({ message: `user successfully deleted` });
  }
};
export const UserController = {
  signUp,
  signIn,
  readAll,
  readOne,
  updateOne,
  deleteOne,
  getUser,
};
