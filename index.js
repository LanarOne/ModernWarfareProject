import express from "express";
import { Connection } from "./src/connect/connection.js";
import initMiddlewares from "./src/middlewares/init.js";
import { Sync } from "./src/connect/connection.js";
import initRoutes from "./src/routes/router.js";

const app = express();
const PORT = process.env.PORT || 4069;

app.get("/", (req, res) => {
  res.send(`ok`);
});

await Connection();
Sync();
initMiddlewares(app);
initRoutes(app);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
