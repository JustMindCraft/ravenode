"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IPFSFactory = require("ipfsd-ctl");
exports.default = {
    init: () => {
        return new Promise((res, rej) => {
            const f = IPFSFactory.create({
                exec: "ipfs",
                type: 'js',
                remote: true, port: 9090
            });
            f.spawn({
                config: {
                    Gateway: {
                        "Access-Control-Allow-Headers": [
                            "X-Requested-With"
                        ],
                        "Access-Control-Allow-Methods": [
                            "GET",
                            "POST",
                            "PUT",
                        ],
                        "Access-Control-Allow-Origin": [
                            "*", "localhost:3000"
                        ]
                    },
                    EXPERIMENTAL: {
                        pubsub: true, sharding: true, dht: true
                    }
                }
            }, (err, ipfsd) => {
                if (err) {
                    rej(err);
                    throw err;
                }
                res(ipfsd);
            });
        });
    },
    serve: () => {
        return new Promise((res, rej) => {
            const server = IPFSFactory.createServer(9090);
            server.start((err, server) => {
                if (err) {
                    rej(err);
                    throw err;
                }
                res(server);
            });
        });
    },
    use: (instance, action) => {
        return action(instance);
    }
};
//# sourceMappingURL=index.js.map