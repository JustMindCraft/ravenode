export default function restify(pathPrefix:string){
   pathPrefix = pathPrefix || '/api/';
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