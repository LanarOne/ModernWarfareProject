import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.js";
import { User_ProductController } from "../controllers/user_productController.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.js";

const initUser_ProductRoutes = (app) => {
  const router = Router();
  router.post(
    "/create",
    jwtMiddleware,
    sanitizeMiddleware,
    User_ProductController.create
  );
  router.get(
    "/getall",
    jwtMiddleware,
    sanitizeMiddleware,
    User_ProductController.readAll
  );
  router.get(
    "/getone/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    User_ProductController.readOne
  );
  router.delete(
    "/delete/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    User_ProductController.deleteOne
  );

  app.use("/users_products", router);
};

export default initUser_ProductRoutes;
