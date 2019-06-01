import * as  Hapi from 'hapi';
import * as routes  from 'ipfsd-ctl/src/endpoint/routes';
let server:any =  new Hapi.Server();
console.log(server);

export  function startRavenode(port:number, cb:Function){
    cb = cb || (() => {})
    server.connection({
        port: this.port,
        host: 'localhost',
        routes: {
          cors: true
        }
    });
    routes(server);
}

export function  stopRavenode(cb:Function) {
    cb = cb || (() => {})

    server.stop(cb)
}

