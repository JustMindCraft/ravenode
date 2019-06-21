import ApiSetting from "../config/ApiSetting";
import services from "../services";
import sourceMsg from "../output/source";


export default function apiController(source:string, router:any){
    return router.get(`${ApiSetting.BASIC_PATH}/${source}`, async (ctx:any)=>{
        const ServiceKey = source+":limitUsers";
        const service = services[ServiceKey];
        ctx.rest(
            sourceMsg(
                service(
                    {
                        
                    }
                )
            )
        )
    })
}