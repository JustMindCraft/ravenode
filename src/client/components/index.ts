import * as IPFSFactory from 'ipfsd-ctl/dist/index.js';
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
}, function (err, ipfsd) {
  if (err) { throw err }

  ipfsd.api.id(function (err, id) {
    if (err) { throw err }

    console.log(id)
    ipfsd.stop()
  })
})