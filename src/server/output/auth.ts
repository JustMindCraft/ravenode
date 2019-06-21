import { AUTH_PASSWORD_REQUIRED, AUTH_PASSWORD_WRONG, AUTH_USER_NOT_FOUND, AUTH_TYPE_MISSING } from "./constants";

export default async  function authMsg(msg:string){
    
    switch (msg) {
        case AUTH_PASSWORD_REQUIRED:
            
           return {
               code: AUTH_PASSWORD_REQUIRED,
               type: "auth",
               httpStatus: 401
           }
        
        case AUTH_PASSWORD_WRONG:
            return {
                code: AUTH_PASSWORD_WRONG,
                type: "auth",
                httpStatus: 403
            }

        case AUTH_USER_NOT_FOUND:
            return {
                code: AUTH_USER_NOT_FOUND,
                type: "auth",
                httpStatus: 404,
            }

        case AUTH_TYPE_MISSING: 
            return {
                code: AUTH_TYPE_MISSING,
                type: "auth",
                httpStatus: 502
            }
    
        default:
           return {
               data: msg,
               httpStatus: 200,
           };
    }
}

