import Role from "../models/Role.js";

const readAll = async () => {
  try {
    const roles = await Role.findAll();
    if (!roles) {
      return null;
    }
    return roles;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const readOne = async (id) => {
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      return null;
    }
    return role;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

export const RoleDAO = {
  readAll,
  readOne,
};
