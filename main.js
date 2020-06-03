const { app, BrowserWindow, shell } = require('electron');
const path = require("path");
const { exec, spawn } = require('child_process');

function createWindow () {
  let win = new BrowserWindow({
    title: "Loading",
    show: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: false
    }
  })

  win.removeMenu();
  win.maximize();
  win.loadFile('parent.html');
  win.show();
}

app.whenReady().then(createWindow);

app.on('quit', () => {
  spawn('cmd', ['kill.bat']);
});
