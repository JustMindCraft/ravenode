import * as IPFSFactory from 'ipfsd-ctl'; 
export default {
    init:  () => {
        return new Promise((res:Function, rej:Function)=>{
            const f = IPFSFactory.create({
                exec: "ipfs",
                type: 'js',
                remote: true, port: 9090
            })
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
            },(err:any, ipfsd:any)=>{
                if (err) { rej(err); throw err }
                res(ipfsd);
            });
        })
       
    },
    serve: () => {
        return new Promise((res: Function, rej:Function) => {
            const server = IPFSFactory.createServer(9090);
            server.start((err:any, server:any)=>{
                if (err) { rej(err); throw err }
                res(server);
            })
        })
       
    },
    use: (instance,  action:Function) => {
        return action(instance);
    }
   
}