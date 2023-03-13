import User from "../models/User.js";
import bcrypt, {hash} from "bcrypt";
const Create = async ( email, password, username, name, last_name, dob, adress, city, planet, galaxy, wallet, img ) => {
    let result = null;
    try {
        result = User.create( {
            email, password, username, name, last_name, dob, adress, city, planet, galaxy, wallet, img
        } )
        return result
    } catch ( err ) {
        console.error( err.message );
    }
}
const ReadUserByEmail = async ( email ) => {
    try {
        const user = await User.findOne( { where : { email } } );
        if ( !user ) {
            return null;
        }
        return user;
    } catch ( err ) {
        console.error( err.message );
        return err;
    }
};

const ReadAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch ( err ) {
        console.error( err.message );
        return err;
    }
};

const ReadUserById = async ( userId ) => {
    try {
        const user = await User.findByPk( userId );
        if ( !user ) {
            return Error;
        }
        return user;
    } catch ( err ) {
        console.error( err.message );
        return err;
    }
};

const UpdateUser = async ( userId, data ) => {
    try {
        console.log(userId, `DAO`)
        const user = await User.findByPk( userId );
        const { email, password, username, name, last_name, dob, adress, city, planet, galaxy, wallet, img } = data;
        console.log(user)

        if ( !user ) {
            return Error('could not get user');
        }
        const hashedPassword = await bcrypt.hash( password, 10 );
        User.update( { email, password : hashedPassword, username, name, last_name, dob, adress, city, planet, galaxy, wallet, img }, { where : {userId} } );
        return user;
    } catch ( err ) {
        console.error( err.message );
        return err;
    }
};

const DeleteUser = async ( userId ) => {
    try {
        const user = await User.findByPk( userId );
        if ( !user ) {
            return null
        }
        user.destroy();
        return `user found and destroyed`;
    } catch ( err ) {
        console.error( err.message );
        return err;
    }
}

export const UserDAO = {
    Create,
    ReadAllUsers,
    ReadUserById,
    ReadUserByEmail,
    UpdateUser,
    DeleteUser,
};