import { UserDAO } from "../daos/userDao.js";
import { jwtSign } from "../utils/jwtUtils.js";
import { stringIsFilled } from "../utils/stringUtil.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const signUp = async ( req, res ) => {
    try {
        const roleId = 1
        const password = await bcrypt.hash(req.body.password, 10);
        const { email, username, name, last_name, dob, adress, city, planet, galaxy, wallet, img } = req.body;
        const existingUser = await User.findOne( { where : {email} } );
        if ( existingUser ) {
            res.status( 409 ).json( { message : `an account is already linked to this adress : ${ email }` } );
        }
        if ( !email || !password || !username || !name || !last_name || !dob || !adress || !city ) {
            return res.status( 400 ).json( { message : `Sorry, all fields are mandatory` } )
        };
        const user = await UserDAO.Create( email, password, username, name, last_name, dob, adress, city, planet, galaxy, wallet, img, roleId )

        // const token = jwtSign( userId );
        res.status( 201 ).json( { message : `user ${user.username} successfully created`, data : user } );
    } catch ( err ) {
        console.error( err.message );
        res.status( 500 ).json( { message : `internal error`, data : err } );
    }
};

const readAll = async ( req, res ) => {
    const users = await UserDAO.ReadAllUsers();
    if ( !users ) {
        res.status( 404 ).json( { message : `couldnt find users` } );
    }
    res.status( 200 ).json( { message : `users list successfully retrieved`, data : users } );
};

const readOne = async ( req, res ) => {
    const userId  = req.params.id;
    const user = await UserDAO.ReadUserById( userId );
    if ( !user ) {
        res.status( 404 ).json( { message : `could not find user` } );
    }
    res.status( 200 ).json( { message : `user ${user.username} successfully found`, data :{ user } } );
};

const updateOne = async ( req, res ) => {
    const userId = req.params.id;
    console.log(userId, `controller`);
    const { email, password, username, name, last_name, dob, adress, city, planet, galaxy, wallet, img } = req.body;
    if ( !email || !password || !username || !name || !last_name || !dob || !adress || !city || !img ) {
        res.status( 400 ).json( { message : `could not update data`} );
    }
    const data = {email, password, username, name, last_name, dob, adress, city, planet, galaxy, wallet, img};
    const user = await UserDAO.UpdateUser( userId, data );
    if ( !user ){
        res.status( 404 ).json( { message : `could not find user` } );
    }
    res.status( 200 ).json( { message : `user ${user.username} successfully updated`, data : user } );
};

const deleteOne = async ( req, res ) => {
    const userId = req.params.id;
    const user = await UserDAO.DeleteUser( userId )
    console.log(user)
    if ( !user ) {
        res.status( 404 ).json( { message : `could not find user` } );
    } else {
        res.status( 200 ).json( { message : `user successfully deleted` } );
    }
}
export const UserController = {
    signUp,
    readAll,
    readOne,
    updateOne,
    deleteOne,
}