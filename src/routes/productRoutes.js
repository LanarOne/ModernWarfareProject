import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.js";
import { ProductController } from "../controllers/productController.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.js";

const initProductRoutes = (app) => {
  const router = Router();
  router.post(
    "/create",
    jwtMiddleware,
    sanitizeMiddleware,
    ProductController.createProduct
  );
  router.get(
    "/readall",
    jwtMiddleware,
    sanitizeMiddleware,
    ProductController.readAll
  );
  router.get(
    "/readone/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    ProductController.readOneById
  );
  router.put(
    "/update/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    ProductController.updateOne
  );
  router.delete(
    "/delete/:id",
    jwtMiddleware,
    sanitizeMiddleware,
    ProductController.deleteOne
  );

  app.use("/products", router);
};

export default initProductRoutes;
