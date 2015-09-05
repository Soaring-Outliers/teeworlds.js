import me from 'melonJS'
import game from '../game.js'
import Panel from './Panel.js'
import Box from './Box.js'
import Text from './Text.js'
import InputText from './InputText.js'
import Button from './Button.js'

import LazyObj from '../util/LazyObj.js'

// Initialize prompt
var Prompt = new LazyObj({
  titleText: () => new Text(),
  inputText: () => new InputText(),
  okButton: () => new Button({text: "Ok", width: 100 * game.uiScale}),
  cancelButton: () => new Button({text: "Cancel", width: 100 * game.uiScale}),
  bottomPanel: () => new Panel([Prompt.okButton], {layout: Panel.HORIZONTAL}),
  box: () => new Box(new Panel([
      Prompt.titleText,
      new Box(Prompt.inputText, {color: "white", padding: 7, radius: 10}),
      Prompt.bottomPanel
  ]))
})

// Initialize alert
var Alert = new LazyObj({
  titleText: () => new Text(),
  descriptionText: () => new Text({font: game.font}),
  okButton: () => new Button({text: "Ok", width: 100}),
  panel: () => new Panel([Alert.titleText, Alert.okButton]),
  box: () => new Box(Alert.panel)
})

var promptOpened = false
var alertOpened = false

export default class UIUtil {

  static prompt(title, {cancelable = true, okText = "Ok", cancelText = "Cancel"} = {}) {
    if(promptOpened)
      game.screen.close(Prompt.box)
    Prompt.titleText.text = title
    Prompt.okButton.text = okText
    Prompt.cancelButton.text = cancelText
    Prompt.bottomPanel.remove(Prompt.cancelButton)
    if(cancelable) Prompt.bottomPanel.add(Prompt.cancelButton)

    return new Promise((resolve, reject) => {
      Prompt.box.onEnterKey =
      Prompt.okButton.onClick = () => {
        if(Prompt.inputText.textValue !== "") {
          game.screen.close(Prompt.box)
          promptOpened = false
          resolve(Prompt.inputText.textValue)
        }
      }
      if(cancelable) {
        Prompt.box.onEscKey =
        Prompt.cancelButton.onClick = () => {
          game.screen.close(Prompt.box)
          promptOpened = false
          reject("UIUtil: prompt canceled")
        }
      }
      game.screen.open(Prompt.box)
      promptOpened = true
    })
  }

  static alert(title, {description = null, closable = true} = {}) {
    if(alertOpened)
      game.screen.close(Alert.box)
    Alert.titleText.text = title
    Alert.panel.remove(Alert.descriptionText)
    if(description) {
      Alert.panel.insert(Alert.descriptionText, 1)
      Alert.descriptionText.text = description
    }
    Alert.panel.remove(Alert.okButton)
    if(closable) {
      Alert.panel.add(Alert.okButton)
    }
    return new Promise((resolve, reject) => {
      if(closable) {
        Alert.box.onEnterKey =
        Alert.box.onEscKey =
        Alert.okButton.onClick = () => {
          game.screen.close(Alert.box)
          alertOpened = false
          resolve()
        }
      }
      game.screen.open(Alert.box)
      alertOpened = true
    })
  }
}
