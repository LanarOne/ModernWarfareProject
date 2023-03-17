import { RoleDAO } from "../daos/roleDao.js";
import Role from "../models/Role.js";

const readAllRoles = async (req, res) => {
  const roles = await RoleDAO.readAll();
  if (!roles) {
    return res.status(404).json({ message: `could not find roles list` });
  }
  return res
    .status(200)
    .json({ message: `roles list successfully retrieved`, data: roles });
};

const readOneRole = async (req, res) => {
  const id = req.params.id;
  const role = await RoleDAO.readOne(id);
  if (!role) {
    return res.status(404).json({ message: `could not find role` });
  }
  return res
    .status(200)
    .json({ message: `role ${role.name} successfully retrieved`, data: role });
};

export const RoleController = {
  readAllRoles,
  readOneRole,
};
