"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const APIError_1 = require("./APIError");
const restify_1 = require("./restify");
function registerMiddles(app) {
    app.use(APIError_1.default);
    app.use(restify_1.default);
}
exports.default = registerMiddles;
//# sourceMappingURL=registerMiddles.js.map