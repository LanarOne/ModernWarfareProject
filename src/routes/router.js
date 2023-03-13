import initUserRoutes from './userRoutes.js';
import { sanitizeMiddleware } from "../middlewares/sanitize.js";

const initRoutes = ( app ) => {
    initUserRoutes( app, sanitizeMiddleware );
}

export default initRoutes;