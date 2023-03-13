import jwt from 'jsonwebtoken';
import { secret } from "../connect/jwtConfig.js";
import { stringIsFilled } from "./stringUtil.js";

const jwtOptions = {
    expiresIn : 28800000,
};

export const jwtVerify = ( token ) => {
    try {
        const decoded = jwt.verify( token, secret );
        const userId = decoded.data;
        return stringIsFilled( userId ) ? userId : '';
    } catch ( err ) {
        console.error(`jwtVerify error`, err.message);
        return null;
    }
}
export const jwtSign = ( data ) => jwt.sign( { data }, secret, jwtOptions )