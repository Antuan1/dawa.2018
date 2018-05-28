const path = require('path')
const glob = require('glob')
// Controla el ciclo de vida de la aplicacion
//Acceso al gestor de ventanas de chromium
const{app, BrowserWindow} = require('electron')

//Referencia global a la ventana principal
var mainWindow = null;

//Terminamos el proceso de la aplicacion cuando la ventana se ha cerrado 
app.on('window-all-closed', function(){
	if(process.platform != 'darwin')
		app.quit();

});

let template  = [{
	label: 'Menu Tecsup',
	submenu: [
	{
		label: 'Hola Dawa',
		accelerator: 'CmdOrCtrl+Z',
		role: 'undo'
	},{
		type: 'separator'
	},{
		label: 'View',
		submenu: [{
			label: 'Reload',
			accelerator: 'CmdOrCtrl+R',
			click: (item, focusedWindow) => {
				if (focusedWindow){
					if (focusedWindow.is ===1){
						BrowserWindow.getAllwindows().forEach(win =>{
							if (win.id > 1) win.close()
						})
					}
					focusedWindow.reload()
				}
			}
		},{
			label: ' Toggle full screen',
			accelerator: (()=>{
				if(process.platform === 'darwin'){
					return 'Ctrl+Command+F'
				}else{
					return 'F11'
				}
			})(),
			click: (item, focusedWindow) => {
				if(focusedWindow){
					focusedWindow.setFullScreen(!focusedWindow.isFullScreen())

				}
			}
		},{
			type: 'separator'
		},{
			label: 'Toggle developer Tools',
			accelerator: (()=> {
				if(process.plataform === 'darwin'){
					return 'Alt+Command+I'
				}else{
					return 'Ctrl+Shift+I'
				}
			})(),
			click: (item, focusedWindow)=>{
				if(focusedWindow){
					focusedWindow.toggleDevTools()
				}
			}
		}
		]
	}

	]
}];

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		width: 800,
		heigth: 600});
	mainWindow.loadURL(`file://${__dirname}/index.html`);

	mainWindow.openDevTools();

	mainWindow.on('closed', function(){
		mainWindow = null;
	});
});