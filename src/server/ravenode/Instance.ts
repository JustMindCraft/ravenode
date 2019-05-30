import * as IPFSFactory from 'ipfsd-ctl'; 
export default async () => {
        const f = IPFSFactory.create({
            exec: "ipfs"
        })
        return await f.spawn();
} 