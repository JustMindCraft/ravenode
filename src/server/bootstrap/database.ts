import { RocksDB } from "@nano-sql/adapter-rocksdb";
import { nSQL } from "@nano-sql/core";
import models from "../models";

let tables:Array<any> = [];

for (let index = 0; index < models.length; index++) {
    const model = models[index];
    tables.push(model.table)
    
}

const initDB = async () => nSQL().createDatabase({
    id: "ravenode", // can be anything that's a string
    mode: new RocksDB(), // save changes to IndexedDB, WebSQL or RocksDB!
    tables,
})

export default initDB;