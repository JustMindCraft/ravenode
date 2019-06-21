import { Model, Document } from 'mongoose'

export interface ICreateUserParams {
    username: string,
    password: string,
    email:string,
    mobile: string,
    wechat: string,
    qq: string,
}

export interface IAuthParams {
    username:string,
    mobile:string,
    password: string,
    mobileSMS: string,
}

export type IAuthType =  "mobile" | "password";


export interface IUserDocument extends Document  {
    username: string,
    password: string,
    email:string,
    mobile: string,
    wechat: string,
    qq: string,
}

export interface IUser extends IUserDocument {
    hashPassword(password: string): string;
}

export interface IUserModel extends Model<IUser> {
    createByPassword(userParams: ICreateUserParams): string,
    auth(authParams:IAuthParams, authType:IAuthType): string,
}