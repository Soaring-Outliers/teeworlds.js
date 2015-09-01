import {HashMap} from 'hashmap'
import Peer from 'peerjs'
//import {Promise} from 'kew'

class PeerConnection {
  constructor(peerJSConnection) {
    this.peerJSConnection = peerJSConnection
    this.connectedDataConnections = new HashMap()

    peerJSConnection.on('connection', this.addDataConnection.bind(this))

    this.on = peerJSConnection.on.bind(peerJSConnection)
    this.once = peerJSConnection.once.bind(peerJSConnection)
    this.off = peerJSConnection.off.bind(peerJSConnection)
    this.id = peerJSConnection.id
  }

  addDataConnection(dataConnection) {
    if(!this.connectedDataConnections.has(dataConnection.peer)) {
      console.log('Requested connection: ' + dataConnection.peer)
      this.connectedDataConnections.set(dataConnection.peer, dataConnection)
      dataConnection.on('close', () =>
        this.connectedDataConnections.remove(dataConnection.peer)
      )
    }
  }

  connect(peerId) {
    return new Promise((resolve, reject) => {
      var dataConnection = this.peerJSConnection.connect(peerId)
      this.peerJSConnection
        .once('error', reject)
      dataConnection
        .once('open', () => {
          this.peerJSConnection.off('error', reject)
          this.addDataConnection.apply(this, [dataConnection])
          resolve(dataConnection)
        })
    })
  }

  static create(id) {
    return new Promise((resolve, reject) => {
      var peerJSConnection = new Peer(id, {key: PeerConnection.peerJSAPIKey, debug: 3})
      peerJSConnection
        .once('open', () => {
          peerJSConnection.off('error', reject)
          resolve(new PeerConnection(peerJSConnection))
        })
        .once('error', reject)
    })
  }
}
PeerConnection.peerJSAPIKey = "@@peerJSAPIKey"

// Connection
var peerConnection = null
export default {
  init: (id) => PeerConnection.create(id).then((c) => peerConnection = c),
  connectTo: (id) => peerConnection.connect(id)
}
