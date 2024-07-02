"use strict"
const { contextBridge, ipcRenderer  } = require('electron')

const { node, electron, chrome } = process.versions

contextBridge.exposeInMainWorld('data', {
  versions: {
    node,
    electron,
    chrome,
  }
})

contextBridge.exposeInMainWorld('methods', {
  saveFile() {
    ipcRenderer.send('', {})

  },
  readFile() {
    return ipcRenderer.invoke('')
  }

})
