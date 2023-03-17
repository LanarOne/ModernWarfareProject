import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.js";
import { RoleController } from "../controllers/roleController.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.js";

const initRoleRoutes = (app) => {
  const router = Router();
  router.get(
    "/getall",
    jwtMiddleware,
    sanitizeMiddleware,
    RoleController.readAllRoles
  );
  router.get(
    "/getone/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    RoleController.readOneRole
  );

  app.use("/roles", router);
};

export default initRoleRoutes;
