import Type from "../models/Type.js";

const ReadAll = async () => {
  try {
    const types = await Type.findAll();
    if (!types) {
      return null;
    }
    return types;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

const ReadOne = async (id) => {
  try {
    const type = await Type.findByPk(id);
    if (!type) {
      return null;
    }
    return type;
  } catch (err) {
    console.error(err.message);
    return Error(err.message);
  }
};

export const TypeDAO = {
  ReadAll,
  ReadOne,
};
