import { jwtVerify } from "../utils/jwtUtils.js";

export const jwtMiddleware = ( req, res, next ) => {
    const token = req.headers.authorization;
    const userId = jwtVerify( token );
    if ( !userId ) return res.status( 403 )
        .json( { message : `no authorization` } );
    req.body = { ...req.body, userId };
    next();
}