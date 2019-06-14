export default function restifyV1_0(pathPrefix:string){
   pathPrefix = pathPrefix || '/car_sys/api/v1_0';
   return async (ctx:any, next:any) => {
    if (ctx.request.path.startsWith(pathPrefix)) {
        ctx.rest = (data:any) => {
            ctx.response.type = 'application/json';
            ctx.response.body = data;
        }
        await next();
    } else {
        await next();
    }
    };
}