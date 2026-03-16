const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron')
const path = require('path')
const fs   = require('fs')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1440,
    minHeight: 900,
    frame: false,
    backgroundColor: '#0A0A0A',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    },
    icon: path.join(__dirname, '../assets/icon.png'),
    show: false
  })

  mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'))
  mainWindow.once('ready-to-show', () => mainWindow.show())

  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools({ mode: 'detach' })
  }
}

app.whenReady().then(() => {
  createWindow()
  Menu.setApplicationMenu(null)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('win:minimize', () => mainWindow.minimize())
ipcMain.on('win:maximize', () =>
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
)
ipcMain.on('win:close', () => {
  
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.executeJavaScript('if(window._PM) _PM.persistNow(); true').catch(() => {})
  }
  setTimeout(() => { if (mainWindow) mainWindow.close() }, 80)
})

ipcMain.handle('file:save', async (_, data) => {
  const { filePath, canceled } = await dialog.showSaveDialog(mainWindow, {
    title: 'Save Graph',
    defaultPath: 'graph.kg',
    filters: [{ name: 'Krapka Graph', extensions: ['kg'] }]
  })
  if (canceled || !filePath) return { success: false }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
  return { success: true, filePath }
})

ipcMain.handle('file:open', async () => {
  const { filePaths, canceled } = await dialog.showOpenDialog(mainWindow, {
    title: 'Open Graph',
    filters: [{ name: 'Krapka Graph', extensions: ['kg'] }],
    properties: ['openFile']
  })
  if (canceled || !filePaths.length) return { success: false }
  const raw = fs.readFileSync(filePaths[0], 'utf-8')
  return { success: true, data: JSON.parse(raw), filePath: filePaths[0] }
})

ipcMain.handle('file:fetch-image', async (_, url) => {
  try {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const mimeType = response.headers.get('content-type') || 'image/png'
    return `data:${mimeType};base64,${buffer.toString('base64')}`
  } catch (error) {
    console.error('- - - - -:', error)
    return null
  }
})

ipcMain.handle('export:png', async (_, dataUrl) => {
  const { filePath, canceled } = await dialog.showSaveDialog(mainWindow, {
    title: 'Export PNG',
    defaultPath: 'graph.png',
    filters: [{ name: 'PNG Image', extensions: ['png'] }]
  })
  if (canceled || !filePath) return { success: false }
  const base64 = dataUrl.replace(/^data:image\/png;base64,/, '')
  fs.writeFileSync(filePath, Buffer.from(base64, 'base64'))
  return { success: true, filePath }
})

ipcMain.handle('export:svg', async (_, svgString) => {
  const { filePath, canceled } = await dialog.showSaveDialog(mainWindow, {
    title: 'Export SVG',
    defaultPath: 'graph.svg',
    filters: [{ name: 'SVG Image', extensions: ['svg'] }]
  })
  if (canceled || !filePath) return { success: false }
  fs.writeFileSync(filePath, svgString, 'utf-8')
  return { success: true, filePath }
})