"use strict"

const { app, BrowserWindow, ipcMain } = require('electron')
const { resolve } = require('node:path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    x: 0,
    y: 0,
    alwaysOnTop: false,
    webPreferences:{
      nodeIntegration:true,
      preload: resolve(__dirname, 'preload.js'),

    }
  
  })

  ipcMain.on('', (ev, data)=>{})
  ipcMain.handle('', (ev, data)=>{})

  // win.webContents.send('', {})

  win.loadFile('./index.html')
}

app.whenReady().then(()=>{
  createWindow()

  app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', ()=>{
  if(process.platform !== 'darwin') app.quit()
})
