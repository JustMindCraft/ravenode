import * as mongoose from 'mongoose'
import { IAuthParams, IAuthType, ICreateUserParams, IUserModel, IUser, IUserDocument } from './UserTypes';
import * as bcrypt from 'bcrypt';
import * as  uuid from 'uuid';
import { AUTH_PASSWORD_REQUIRED, AUTH_USER_NOT_FOUND, AUTH_TYPE_MISSING, AUTH_PASSWORD_WRONG } from '../output/constants';
import { signUser } from '../utils/jsonwebtoken';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:  {
        type: String,
        unique: true,
      },
    password: {
        type: String,
      },
    email: {
        type: String,
        unique: true,

      },
    mobile: {
        type: String,
        unique: true,

      },
    wechat: {
        type: String,
        unique: true,

      },
    qq: {
        type: String,
        unique: true,

      },
    isBanned: { type: Boolean, default: false },
    updated: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now },
}, { id: true });

UserSchema.statics.auth = async function(authParams:IAuthParams, type: IAuthType){
  
    const { username ,password } = authParams;
    switch (type) {
        case "password":
            if(!authParams.password){
              return AUTH_PASSWORD_REQUIRED;
            }
            const user = await this.findOne({$or: [
              {username},
              {email:username},
              {mobile:username}
            ]})

            if(!user){
              return AUTH_USER_NOT_FOUND;
            }
           
            const authed = bcrypt.compareSync(password, user.password); // true
            if(!authed){
              return AUTH_PASSWORD_WRONG;
            }
            const token =  signUser({username: user.username, userId: user._id});
            console.log(token);
            
            return token;

        case "mobile":
            return AUTH_TYPE_MISSING
    
        default:
            return AUTH_TYPE_MISSING;
    }
}

UserSchema.statics.createByPassword = async function(userParams:ICreateUserParams){
  const {password } = userParams;
  const saltRounds = Math.random();
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  try {
    return await this.create({
     ...userParams, password: hash,
    }) 
  } catch (error) {
    throw error;
  }
}


UserSchema.statics.register = async function(registerParams){
  //rigster user begin
  const password = registerParams.password;
  let username = registerParams.username;
  let email = registerParams.email;
  let wechat = registerParams.wechat;
  let mobile = registerParams.mobile;
  let qq = registerParams.qq;
  
  if(!username){
    username = "unset"+uuid;
  }
  
  if(!wechat){
    wechat = "unset"+uuid;
  }
  if(!mobile){
    mobile = "unset"+uuid;
  }else{
    const isMobileExist = await this.findOne({mobile});
    if(isMobileExist){
      return "MOBILE_ALREADY_EXISTS";
    }
    if(!/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(mobile)){
      return "MOBILE_FORMAT_WRONG"
    }
  }
  if(!qq){
    qq = "unset"+uuid;
  }
  if(!password){
    return "PASSWORD_MISSING";
  }
  if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
    return "PASSWORD_FORMAT_WRONG"
  }
  if(!email){
    email = "unset"+uuid;
  }else{
    
    const isEmailExist =  await this.findOne({email});
    
    if(isEmailExist){
      return "EMAIL_ALREADY_EXISTS";
    }
    
  }
  const saltRounds = Math.random();
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  try {
      return await this.create({
        username,
        email,
        wechat,
        mobile,
        qq,
        password: hash
      });
  } catch (error) {
      return error;
  }
  // register user end
}

const User:IUserModel = mongoose.model<IUser, IUserModel>("User", UserSchema);

export default User;