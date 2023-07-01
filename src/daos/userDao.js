import User from "../models/User.js";
import bcrypt from "bcrypt";
const Create = async (
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
) => {
  let result = null;
  try {
    result = User.create({
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
      roleId,
    });
    return result;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};
const ReadUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      where: { email: email },
    });
    if (!user) {
      return null;
    }
    return user;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const ReadAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const ReadUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    return user;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const UpdateUser = async (id, data) => {
  try {
    const user = await User.findByPk(id);
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
    } = data;
    if (!user) {
      return null;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    User.update(
      {
        email,
        password: hashedPassword,
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
      },
      { where: { id } }
    );
    return user;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

const DeleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return null;
    }
    await user.destroy();
    return `user found and destroyed`;
  } catch (err) {
    console.error(err.message);
    return err;
  }
};

export const UserDAO = {
  Create,
  ReadAllUsers,
  ReadUserById,
  ReadUserByEmail,
  UpdateUser,
  DeleteUser,
};
