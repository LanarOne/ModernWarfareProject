import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.js";
import { CartController } from "../controllers/cartController.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.js";

const initCartRoutes = (app) => {
  const router = Router();
  router.post(
    "/create",
    jwtMiddleware,
    sanitizeMiddleware,
    CartController.createCart
  );
  router.get(
    "/readall",
    jwtMiddleware,
    sanitizeMiddleware,
    CartController.readAll
  );
  router.get(
    "/readone/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    CartController.readOneById
  );
  router.delete(
    "/delete/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    CartController.deleteOne
  );

  app.use("/carts", router);
};

export default initCartRoutes;
