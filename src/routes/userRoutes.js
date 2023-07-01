import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.js";
import { UserController } from "../controllers/userController.js";

const initUserRoutes = (app, sm) => {
  const router = Router();
  router.post("/signup", sm, UserController.signUp);
  router.post("/signin", sm, UserController.signIn);
  router.get("/getall", jwtMiddleware, sm, UserController.readAll);
  router.get("/getone/:id", jwtMiddleware, sm, UserController.readOne);
  router.get("/getone", sm, UserController.getUser);
  router.put("/update/:id", jwtMiddleware, sm, UserController.updateOne);
  router.delete("/delete/:id", jwtMiddleware, sm, UserController.deleteOne);

  app.use("/users", router);
};
export default initUserRoutes;
