var DHT = require('bittorrent-dht')
var ed = require('ed25519-supercop')
var crypto = require('crypto')

var dht = new DHT({ verify: ed.verify })

var keypair = ed.createKeyPair(ed.createSeed())

var msg = 'Hello World!'
var value = Buffer.from(msg, 'utf8'); 

dht.listen(20000, function () {
   console.log('BitTorrent node listening on port %d. \nSending message "%s" using the public key "%s"', 20000, msg, keypair.publicKey.toString('hex'))

   var opts = {
     k: keypair.publicKey,
     seq: 0,
     v: value,
     sign: function (buf) {
       return ed.sign(buf, keypair.publicKey, keypair.secretKey)
     }
   }

   dht.put(opts, function (err, hash) {
  	console.log('DHT message "%s" sent with hash "%s"', msg, hash.toString('hex'))
	process.exit()
   })
})
