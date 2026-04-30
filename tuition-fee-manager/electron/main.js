import BrowserWindow, { app } from "electron";

function createWindow(){
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
    });

    win.loadurl("http://localhost:5173");
}

app.whenReady().then(()=>{
    createWindow();
});