"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./bootstrap/app");
const ravenode_1 = require("../ravenode");
function middle(instance) {
    console.log(instance.api);
}
const init = async () => {
    app_1.default.listen(3000);
    const server = await ravenode_1.default.serve();
    const instance = await ravenode_1.default.init();
    ravenode_1.default.use(instance, middle);
    console.log('server runing at port 3000');
};
init();
//# sourceMappingURL=index.js.map