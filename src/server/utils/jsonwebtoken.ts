import * as  jwt from 'jsonwebtoken';
import ApiSetting from '../config/ApiSetting';
import { AUTH_TOKEN_VERIFY_FAIL } from '../output/constants';
interface IUserSign  {
    username: string,
    userId: string,
}
export function signUser(user: IUserSign){
    const token = jwt.sign(user, ApiSetting.SECRECT_KEY);
    return token
}

export function verifyToken(token: string){
    try {
        const decoded = jwt.verify(token, ApiSetting.SECRECT_KEY);
        return decoded;
    } catch (error) {
        console.error(error);
        return AUTH_TOKEN_VERIFY_FAIL;
    }
   
}