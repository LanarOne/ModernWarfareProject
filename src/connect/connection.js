import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("BYB_v2_1", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
});

export const Connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
export const Sync = async () => {
  try {
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to sync models:", error);
  }
};

export default { sequelize };
