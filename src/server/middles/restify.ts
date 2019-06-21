export default function restify(pathPrefix:string){
    
   return async (ctx:any, next:any) => {
    if (ctx.request.path.startsWith(pathPrefix)) {
        ctx.rest = (data:any) => {
            if(data.httpStatus){
                ctx.response.status = data.httpStatus;
            }else{
                ctx.response.status = 200;
            }
            ctx.response.type = 'application/json';
            if(data.code){
                ctx.response.body = {
                    code: data.code,
                    msg: data.msg,
                };
            }
            ctx.response.body = data;
            
        }
        await next();
    } else {
        await next();
    }
    };
}