import * as IPFSFactory from 'ipfsd-ctl'; 
import Instance from './Instance';
let instance = Instance();
export default {
    init: async () => {
        const f = IPFSFactory.create({
            exec: "ipfs"
        })
        return await f.spawn();
    } 
}