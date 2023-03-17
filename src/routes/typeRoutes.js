import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.js";
import { TypeController } from "../controllers/typeController.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.js";

const initTypeRoutes = (app) => {
  const router = Router();
  router.get(
    "/getall",
    jwtMiddleware,
    sanitizeMiddleware,
    TypeController.readAll
  );
  router.get(
    "/getone/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    TypeController.readOne
  );

  app.use("/types", router);
};

export default initTypeRoutes;
