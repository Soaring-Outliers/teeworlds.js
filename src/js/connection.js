import {HashMap} from 'hashmap'
import {Peer} from 'peerjs'
import {Promise} from 'kew'

var PeerConnection = Object.extend({
  init: function(peerJSConnection) {
    this.peerJSConnection = peerJSConnection
    this.connectedDataConnections = new HashMap()

    peerJSConnection.on('connection', this.addDataConnection.bind(this))

    this.on = peerJSConnection.on.bind(peerJSConnection)
    this.once = peerJSConnection.once.bind(peerJSConnection)
    this.off = peerJSConnection.off.bind(peerJSConnection)
    this.id = peerJSConnection.id
  },

  addDataConnection: function(dataConnection) {
    var self = this
    if(!this.connectedDataConnections.has(dataConnection.peer)) {
      console.log('Requested connection: ' + dataConnection.peer)
      this.connectedDataConnections.set(dataConnection.peer, dataConnection)
      dataConnection.on('close', function() {
        self.connectedDataConnections.remove(dataConnection.peer)
      })
    }
  },

  connect: function(peerId) {
    var self = this
    return new Promise(function(onFullfilled, onRejected) {
      var dataConnection = self.peerJSConnection.connect(peerId)
      self.peerJSConnection.once('error', onRejected)
      dataConnection
        .once('open', function() {
          self.peerJSConnection.off('error', onRejected)
          self.addDataConnection.apply(self, [dataConnection])
          onFullfilled(dataConnection)
        })
    })
  }
})

PeerConnection.create = function(id) {
  return new Promise(function(onFullfilled, onRejected) {
    var peerJSConnection = new Peer(id, {key: '@@peerJSAPIKey', debug: 3})
    peerJSConnection
      .once('open', function() {
        peerJSConnection.off('error', onRejected)
        onFullfilled(new PeerConnection(peerJSConnection))
      })
      .once('error', onRejected)
  })
}

export var connection = {
  connect: function(id) {
    var self = this
    return PeerConnection
      .create(id)
      .then(function(peerConnection) {
        self.peerConnection = peerConnection
        return peerConnection
      })
  }
}

connection.peerJSAPIKey = "@@peerJSAPIKey"
connection.peerConnection = null

/*
var PeerConnectionManager = (function() {
  var basePeerId = 10
  var peerIdLimit = 50
  var self = this

  function connect (peerId) {
    function rejected (err) {
      if(err.type === 'unavailable-id' || peerId === peerIdLimit)
        return connect(peerId + 1)
      return null
    }
    return PeerConnection.create(peerId).catch(rejected)
  }

  connect(basePeerId).then(function(peerConnection) {
    if(PeerConnection === null) {
      console.log('Connection error')
    } else {
      console.log(peerConnection)
      self.baseConnection = peerConnection
    }
  })

  self.listAllPeers = function(callback) {
    function connect (peerId) {
      function increment () {
        return connect(peerId + 1)
      }
      function fullfilled (dataConnection) {
        callback(dataConnection)
        return increment()
      }

      if(peerId === parseInt(self.baseConnection.id))
        peerId += 1 

      if(peerId <= peerIdLimit)
        return self.baseConnection.connect(peerId).then(fullfilled, increment)
      else
        return null
    }
    return connect(basePeerId)
  }

  self.listAllPeers2 = function() {
    var promises = []

    for (var id = basePeerId id < peerIdLimit id++) {
      if(id !== parseInt(self.baseConnection.id))
        promises.push(self.baseConnection.connect(id))
    }

    return Promise.all(promises)
  }

  return self
})()*/