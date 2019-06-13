"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function controller(router) {
    return router.get('/', async (ctx) => {
        ctx.renderHTML('index.html');
    });
}
exports.default = controller;
//# sourceMappingURL=index.js.map