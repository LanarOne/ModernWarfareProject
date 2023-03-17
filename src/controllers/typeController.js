import { TypeDAO } from "../daos/typeDao.js";

const readAll = async (req, res) => {
  const types = await TypeDAO.ReadAll();
  if (!types) {
    return res.status(404).json({ message: `could not find ` });
  }
  return res
    .status(200)
    .json({ message: `types list successfully retrieved`, data: types });
};

const readOne = async (req, res) => {
  const id = req.params.id;
  const type = await TypeDAO.ReadOne(id);
  if (!type) {
    return res.status(404).json({ message: `could not find type` });
  }
  return res
    .status(200)
    .json({ message: `type successfully retrieved`, data: type });
};

export const TypeController = {
  readAll,
  readOne,
};
