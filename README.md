Teeworlds JS
================

*Development stage* : early state / project initialization

A WIP [Teeworlds](http://teeworlds.com) clone in the browser.

This project does **NOT** intent to port the original game into JavaScript. All graphical resources will be obtained
from the original game but the source code is made from scratch without trying to translate the original source code.

## Design

Teeworlds JS is a full-stack JS project that won't necessarily follow the same software design as the original game.
This project will not be based on pure server-client architecture but will rather use P2P connections. A server will
nevertheless serve the game code, the game resources and assist the P2P connection between players but won't relay
mutliplayer actions. This P2P WebRTC based architecture will enable to deploy this game on very lightweight servers.

**Client-side** : [melonJS](http://melonjs.org/), *WebSocket* (to initialize P2P connections between players) and
                  [Peer.js](http://peerjs.com/) (for multiplayer using P2P data transfer)

**Server-side** : [Node.js](http://nodejs.org/), [Express](http://expressjs.com/) and *WebSocket*.

## Project structure

    data                 -> game resources (sprites, audio, maps, ...)
    src
     ├──client
     │  ├──js            -> client source code
     │  └──web           -> client resources (css and web pages)
     └──server
        ├──express       -> http web server source code (express.js server)
        └──websocket     -> websocket server source code
    lib                  -> non-npm javascript library (melonJS)
    grunt                -> grunt task definitions

## Installation

    npm install
    git submodule init
    git submodule update

## Grunt tasks

### Run for development (with source code watcher)

    grunt serve

### Build for production (with js minifying & html5 cache)

    grunt build
    //Then run with: node dist/server

### Generate sprites (only executed once when modifying sprites)

    grunt sprite


