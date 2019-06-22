import ApiSetting from "../config/ApiSetting";
import services from "../services";
import sourceMsg from "../output/source";
import mongoose from "../mongoose";


export default function apiController(source:string, router:any){
    return router.get(`${ApiSetting.BASIC_PATH}/${source}`, async (ctx:any)=>{
        const ServiceKey = source+":limitUsers";
        const service = services(ServiceKey);
        const model = mongoose["users"]
        const rlt = await await service(
            model,
            {
                page: 1, 
                pagesize: 35, 
                condition: {},
                sort: {created: -1},
                fields: "_id, username",

            }
        );
        
        ctx.rest(
            await sourceMsg(
                rlt
            )
        )
    })
}