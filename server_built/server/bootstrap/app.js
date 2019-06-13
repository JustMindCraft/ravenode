"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const path_1 = require("../defination/constant/path");
const renderHTML_1 = require("../middles/renderHTML");
const controllers_1 = require("../controllers");
const home = serve(path_1.STATIC_PATH);
const app = new Koa();
const router = new Router();
controllers_1.default(router);
app.use(home);
app.use(renderHTML_1.default());
app.use(router.routes());
exports.default = app;
//# sourceMappingURL=app.js.map