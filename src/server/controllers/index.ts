import ApiSetting from "../config/ApiSetting";
import apiController from "./api";
import authMsg  from "../output/auth";
import User from "../mongoose/User";

export default function controller(router:any){
    apiController("users", router);
    apiController("posts", router);
    return router
    .get('/', async (ctx:any) => {
        ctx.renderHTML('index.html');
    })
    .get('/register', async (ctx:any)=>{
        ctx.renderHTML('register.html');
    })
    .get('/admin', async (ctx:any)=>{
        ctx.renderHTML('admin.html');
    })
    .get(ApiSetting.BASIC_PATH, async (ctx:any)=>{
        ctx.rest({
            msg: "API server test success",
            code: "test:success"
        })
    })
    .post(ApiSetting.AUTH_PATH,  async (ctx:any)=>{
        const { username, password, authType, mobile, mobileSMS } = ctx.request.body;
        ctx.rest(
            await authMsg(
                await User.auth(
                    {
                        username, password, mobile, mobileSMS
                    }, 
                    authType
                )
            )
        )
    })
    ;
}