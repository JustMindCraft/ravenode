import * as IPFSFactory from 'ipfsd-ctl'; 
let instance = null;
export default {
    init:  () => {
        return new Promise((res:Function, rej:Function)=>{
            const f = IPFSFactory.create({
                exec: "ipfs",
                type: 'js'
            })
            instance =  f.spawn({
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
                    }
                }
            },(err:any, ipfsd:any)=>{
                if (err) { rej(err); throw err }
                res(ipfsd);
            });
        })
       
    },
   
}