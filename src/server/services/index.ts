import { limitUsers, IUserServiceQuery } from "./users";
import { IMongooseModel } from "../models";
import { IUserModel, IUser } from "../mongoose/UserTypes";

export  function fetchList<T extends IUserModel, U extends IUserServiceQuery>(
    model: T, 
    fetchParams: U): any{
        const { condition, fields, page, pagesize, sort} = fetchParams;
        return model.find(
            condition, 
            fields, 
            {
                skip: (page-1)*pagesize, 
                limit: pagesize,
                sort: {...sort}
            }
            );
}



export default (sourceOpera:string) =>  {
    switch (sourceOpera) {
        case "users:limitUsers":
            let usersFetchList: IMongooseModel<IUserModel, IUserServiceQuery> = fetchList;
            return usersFetchList;
        default:
            return () => {
                return "UNKONW_SOURCE_OPERA";
                
            }
    }
   
}