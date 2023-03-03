const { app, BrowserWindow } = require('electron');

process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production' ? true : false;
const isMac = process.platform === 'darwin' ? true : false;

console.log(process.platform);

function createMainWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    title: 'My App',
    width: 800,
    height: 600,
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    resizable: isDev,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.

  mainWindow.loadFile('./app/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}
app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
  if (!isMac) app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});
