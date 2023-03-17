import { sanitizeMiddleware } from "../middlewares/sanitize.js";
import initUserRoutes from "./userRoutes.js";
import initProductRoutes from "./productRoutes.js";
import initCartRoutes from "./cartRoutes.js";
import initCart_UserRoutes from "./cart_userRoutes.js";
import initRoleRoutes from "./roleRoutes.js";
import initTypeRoutes from "./typeRoutes.js";
import initUser_ProductRoutes from "./user_productRoutes.js";

const initRoutes = (app) => {
  initUserRoutes(app, sanitizeMiddleware);
  initProductRoutes(app, sanitizeMiddleware);
  initCartRoutes(app, sanitizeMiddleware);
  initCart_UserRoutes(app, sanitizeMiddleware);
  initRoleRoutes(app, sanitizeMiddleware);
  initTypeRoutes(app, sanitizeMiddleware);
  initUser_ProductRoutes(app, sanitizeMiddleware);
};

export default initRoutes;
