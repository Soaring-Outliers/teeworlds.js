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

    src
     ├──client
     │  ├──js            -> client source code
     │  └──web           -> client resources (css, web pages, images, ...)
     └──server
        ├──express       -> http server source code (express.js server)
        └──websocket     -> websocket server source code

## Installation

    npm install
    bower install

## Change environment

    grunt prod
    #or
    grunt dev

## Build

    grunt build

## Run node server

    grunt start wait
