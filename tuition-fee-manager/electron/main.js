import  { BrowserWindow,app } from "electron";

async function createWindow(){
    try {
        const win = await new BrowserWindow({
        width: 1000,
        height: 700,
        });

        await win.loadURL("http://localhost:5173");
    } catch (error) {
        console.log(error.message);
    }
    
}

app.whenReady().then(()=>{
    createWindow();
});