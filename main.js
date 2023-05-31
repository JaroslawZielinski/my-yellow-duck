// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow(overlay, description) {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 360,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // Production or test mode?
  let testFlag = false;

  // Set null menu to app
  if (!testFlag) {
    // Create Null Menu
    const customMenu = Menu.buildFromTemplate([]);
    Menu.setApplicationMenu(customMenu);
  }

  // Set app's icon
  const iconPath = path.join(__dirname, 'yellow-duck.png');
  mainWindow.setIcon(iconPath);

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  if (testFlag) {
    mainWindow.webContents.openDevTools()
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
