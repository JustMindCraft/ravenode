import User from "../mongoose/User";

export interface IUserServiceQuery  {
    page:number | undefined | null, 
    pagesize: number | undefined | null, 
    condition:object | undefined | null,
    sort: object | undefined | null,
    fields: string | undefined | null,
}

type limitUsersType = (query: IUserServiceQuery) => {};

export const limitUsers:limitUsersType = async (
    query: IUserServiceQuery = {
        page: 1,
        pagesize: 20,
        condition: {},
        sort: {created: -1},
        fields: "_id, username"
    }
    ) =>
    {
        const { condition, fields, page, pagesize, sort} = query;
        const rlt = await User.find(
            condition, 
            fields, 
            {
                skip: (page-1)*pagesize, 
                limit: pagesize,
                sort: {...sort}
            }
            );
        return rlt;
       
    }

