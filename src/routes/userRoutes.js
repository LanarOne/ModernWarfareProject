import { Router } from "express";
import { jwtMiddleware } from "../middlewares/jwt.js";
import { UserController } from "../controllers/userController.js";

const initUserRoutes = ( app ) => {
    const router = Router();
    router.post( '/signup', UserController.signUp );
    router.get( '/getall', UserController.readAll );
    router.get( '/getone/:id', UserController.readOne );
    router.put( '/update/:id', UserController.updateOne );
    router.delete( '/delete/:id', UserController.deleteOne );

    app.use('/users', router);
};
export default initUserRoutes;