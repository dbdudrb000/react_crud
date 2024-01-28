const { app, BrowserWindow } = require('electron');
const path = require('path');
//const isDev = require('electron-is-dev');

let mainWindow;

const createWindow = () => {
  const brower = new BrowserWindow({
    width: 800,
    height: 600
  })

  // Electron은 어떻게 사용하는지 몰라서 e-voting 프로젝트 진행하면서 배운걸로 적용시켜보자!
  brower.loadFile('');
}

app.whenReady().then(() => {
  createWindow()
})

// 모든 창이 닫히면 앱을 종료합니다.
app.on('window-all-closed',() => {
  if (process.platform !== 'darwin') app.quit();
});

// macOS에서는 창을 다시 만듭니다.
app.on('activate',() => {
  if (mainWindow === null) createWindow();
});