const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

var mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({height:450, width:520, resizable: false, icon: "src/images/favico.png"});
    mainWindow.setTitle("Stopwatch");

    mainWindow.loadURL(url.format({
       pathname: path.join('src/index.html'),
       protocol: 'file:',
       slashes: true
    }));

    Menu.setApplicationMenu(null);
});
