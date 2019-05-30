import * as IPFSFactory from 'ipfsd-ctl';
import Server from 'ipfsd-ctl/src/endpoint/server';

const port = 9090;
const server:any = IPFSFactory.createServer({ port })
IPFSFactory.create({ remote: true, port: port })
server.start()