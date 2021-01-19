const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    debugger
    win.loadFile('./src/index.html');
    win.webContents.openDevTools() // 打开控制台
}

app.whenReady().then(createWindow);