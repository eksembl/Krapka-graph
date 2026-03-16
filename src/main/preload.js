const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('krapka', {
  minimize:    () => ipcRenderer.send('win:minimize'),
  maximize:    () => ipcRenderer.send('win:maximize'),
  close:       () => ipcRenderer.send('win:close'),
  saveGraph:   (data)      => ipcRenderer.invoke('file:save', data),
  openGraph:   ()          => ipcRenderer.invoke('file:open'),
  exportPng:   (dataUrl)   => ipcRenderer.invoke('export:png', dataUrl),
  exportSvg:   (svgString) => ipcRenderer.invoke('export:svg', svgString),
  fetchImage:  (url)       => ipcRenderer.invoke('file:fetch-image', url)
})