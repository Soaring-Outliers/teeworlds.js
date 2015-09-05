import PeerConnection from './PeerConnection.js'
import {HashMap} from 'hashmap'
import UIUtil from '../ui/UIUtil.js'

function alertError(err, description = null) {
  if(err === "UIUtil: prompt canceled") {
    //ignore
    return Promise.reject()
  }

  var title = "Connection error"
  if(err.type === "unavailable-id") {
    title = "Username already taken"
  } else if(err.type === "peer-unavailable") {
    title = "User not connected"
  }
  return UIUtil.alert("Error: " + title, {description})
}

export default class ConnectionControler {
  constructor() {
    this.peerConnection = null
    this.username = null
    this.eventSubscribers = new HashMap()
  }

  init() {
    this.username = localStorage.getItem("twjs.username")
    if(this.username) {
      UIUtil.alert("Connecting as " + this.username + "...", {closable: false})
      var askUserName = this.askUserName.bind(this)
      var onConnectionSucess = this.onConnectionSucess.bind(this)
      PeerConnection.create(this.username).then(
        onConnectionSucess,
        (err) => {
          var description = null
          if(err.type === "unavailable-id") {
            description = "The username you took last time is now taken,\n"+
              "you need to pick another one."
          }
          alertError(err, description).then(askUserName)
        }
      )
    } else this.askUserName()
  }

  subscribe(event, cb) {
    if(event === ConnectionControler.CONNECTED) {
      var subs = this.eventSubscribers.get(event)
      if(!subs) {
        subs = [cb]
        this.eventSubscribers.set(event, subs)
      } else subs.push(cb)
    }
  }

  onConnectionSucess(connection) {
    UIUtil.alert("You are connected as " + this.username)
    this.peerConnection = connection
    var subs = this.eventSubscribers.get(ConnectionControler.CONNECTED)
    if(subs) subs.map((cb) => cb())
  }

  onJoinSuccess(dataConnection) {
    UIUtil.alert("You have joined " + dataConnection.peer)
  }

  isConnected() {
    return this.peerConnection == null
  }

  askUserName() {
    var self = this
    var askUserName = this.askUserName.bind(this)
    var onConnectionSucess = this.onConnectionSucess.bind(this)
    var title = "Enter your username"
    var okText = "Start"
    UIUtil.prompt(title, {okText}).then(
      (username) => {
        UIUtil.alert("Connecting as " + username + "...", {closable: false})
        localStorage.setItem("twjs.username", username)
        self.username = username
        return PeerConnection.create(username)
      }).then(
        onConnectionSucess,
        (err) => alertError(err).then(askUserName)
      )
  }

  joinUser() {
    if(this.isConnected()) {
      var joinUser = this.joinUser.bind(this)
      var title = "Enter the username of \nthe player you want to join"
      var okText = "Join"
      UIUtil.prompt(title, {okText}).then(
        (username) => {
          UIUtil.alert("Connecting to " + username + "...", {closable: false})
          return this.peerConnection.connect(username)
        }).then(
          this.onJoinSuccess,
          (err) => alertError(err).then(joinUser)
        )
    }
  }
}
ConnectionControler.CONNECTED = 0
