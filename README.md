# INSTALL

```
> git clone https://github.com/Fabryprog/IoTBitTorrent.git
> cd IoTBitTorrent
> npm install
```

# PoC

## PUT value inside BitTorrent network

```
> node put.js

BitTorrent node listening on port 20000.
Sending message "Hello World!" using the public key "1c96bf4279e7658205b95aeba183275433b9129b9343cc5e96a179d823929839"
DHT message "Hello World!" sent with hash "0bbbe89100251bb682cb7448b285b6a5d588e22e"
```

## GET value from BitTorrent network

```
> node get.js 1c96bf4279e7658205b95aeba183275433b9129b9343cc5e96a179d823929839

BitTorrent node listening on port 20000.
Retrieve message using pubKey "1c96bf4279e7658205b95aeba183275433b9129b9343cc5e96a179d823929839"
Retring data using hash "0bbbe89100251bb682cb7448b285b6a5d588e22e"
Message is "Hello World!"
```

