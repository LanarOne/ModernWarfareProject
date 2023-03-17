import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.js";
import { Cart_UserController } from "../controllers/cart_userController.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.js";

const initCart_UserRoutes = (app) => {
  const router = Router();
  router.post(
    "/create",
    jwtMiddleware,
    sanitizeMiddleware,
    Cart_UserController.createCart_User
  );
  router.get(
    "/getall",
    jwtMiddleware,
    sanitizeMiddleware,
    Cart_UserController.readAll
  );
  router.get(
    "/getone/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    Cart_UserController.readOne
  );
  router.delete(
    "/delete/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    Cart_UserController.deleteOne
  );

  app.use("/carts_users", router);
};

export default initCart_UserRoutes;
