"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function restify(pathPrefix) {
    pathPrefix = pathPrefix || '/api/';
    return async (ctx, next) => {
        if (ctx.request.path.startsWith(pathPrefix)) {
            ctx.rest = (data) => {
                ctx.response.type = 'application/json';
                ctx.response.body = data;
            };
            await next();
        }
        else {
            await next();
        }
    };
}
exports.default = restify;
//# sourceMappingURL=restify.js.map