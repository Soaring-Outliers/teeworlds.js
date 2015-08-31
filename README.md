Teeworlds JS
================

*Development stage* : early state

A lightweight [Teeworlds](http://teeworlds.com) in the browser.
Teeworlds was created by Magnus Auvinen and released under [CC-BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/)

This project does **NOT** intend to port the original game into JavaScript. The goal
of this project is to recreate a lightweight version of Teeworlds into the browser.
All graphical and audio resources comes from the original game.

## Design

Teeworlds JS is a Javascript project using the [melonJS](http://melonjs.org/) framework
game and the [PeerJS](http://peerjs.com/) library for connections between players
through WebRTC (P2P connections). These connections are initiated using the standard
PeerJS [peer-server](https://github.com/peers/peerjs-server) being either the
free developer server from (peerjs.com)[http://peerjs.com] or a server hosted on its own.

## Project structure

    data                -> game resources (sprites, audio, maps, ...)
    src
    ├──js               -> game js sources
    └──web              -> game web sources (css and html)
    lib                 -> non-npm javascript library (melonJS)
    grunt               -> grunt tasks definitions
    properties.json     -> properties file used during packaging (for PeerJS API key)

## Install dependencies

    npm install

## Build and run in static server (in development mode)

    grunt serve

## Build for production (with js minifying & html5 cache)

    grunt build

## Generate sprites (only executed once when modifying sprites)

    grunt sprite
