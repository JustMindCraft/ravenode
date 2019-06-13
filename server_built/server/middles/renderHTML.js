"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path_1 = require("../defination/constant/path");
function renderHTML() {
    return async (ctx, next) => {
        console.log(path_1.STATIC_PATH);
        ctx.renderHTML = (htmlName) => {
            console.log(htmlName);
            ctx.response.type = 'html';
            console.log(path_1.STATIC_PATH + htmlName);
            ctx.response.body = fs.createReadStream(path_1.STATIC_PATH + htmlName);
        };
        await next();
    };
}
exports.default = renderHTML;
//# sourceMappingURL=renderHTML.js.map