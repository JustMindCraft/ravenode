"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_rocksdb_1 = require("@nano-sql/adapter-rocksdb");
const core_1 = require("@nano-sql/core");
const models_1 = require("../models");
let tables = [];
for (let index = 0; index < models_1.default.length; index++) {
    const model = models_1.default[index];
    tables.push(model.table);
}
const initDB = async () => core_1.nSQL().createDatabase({
    id: "my_db",
    mode: new adapter_rocksdb_1.RocksDB(),
    tables,
});
exports.default = initDB;
//# sourceMappingURL=database.js.map