const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height: 600,
    icon: path.join(__dirname, 'assets/ChatGPT.png'),
    webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        sandbox: true
    }
  })

  win.loadURL("https://chat.openai.com")
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

