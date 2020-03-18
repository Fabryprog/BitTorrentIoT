var DHT = require('bittorrent-dht')
var ed = require('ed25519-supercop')
var crypto = require('crypto')

var dht = new DHT({ verify: ed.verify })

var pubKey = Buffer.from(process.argv[2], "hex")

dht.listen(20000, function () {
  console.log('BitTorrent node listening on port %d. \nRetrieve message using pubKey "%s"', 20000, pubKey.toString('hex'))

  var hash = crypto.createHash('sha1').update(pubKey).digest() 

  console.log('Retring data using hash "%s"', hash.toString('hex'))
  dht.get(hash, function(err, res) {
     console.log('Message is "%s"', res.v)
     process.exit()
  })
})
