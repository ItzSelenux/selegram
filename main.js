/*
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


const { app, BrowserWindow, Tray, Menu, shell, globalShortcut, ipcMain  } = require('electron');
const path = require('path');
const fs = require('fs');
const userDataPath = app.getPath('userData');
const windowSizeFilePath = path.join(userDataPath, 'window-size.json');
const tgcFilePath = path.join(userDataPath, 'tgc.json');
let mainWindow;
let appTray;
const themeScript = require('./theme.js');

let wtitle = 'Selegram';
let wicon = 'res/icon.png';
let gh = 'res/gh.png';
let realclose = false;


const wmenu = 
[
{
label: 'File',
submenu: 
[
	{
	label: 'Switch to Telegram K',
	accelerator: 'CmdOrCtrl+Alt+Shift+K',
	click: () => {
		console.log("Switching to Telegram K...");
		mainWindow.setTitle("Switching to Telegram K...");
		mainWindow.loadURL('https://web.telegram.org/k'); 
		tgc = 1;
		saveTGC(tgc);
	}
	},
	{
	label: 'Switch to Telegram A',
	accelerator: 'CmdOrCtrl+Alt+Shift+A',
	click: () => 
	{
		console.log("Switching to Telegram A...");
		mainWindow.setTitle("Switching to Telegram A...");
		mainWindow.loadURL('https://web.telegram.org/a'); 
		tgc = 0;
		saveTGC(tgc);
	}
	},
	{ type: 'separator' },
	{
	label: 'Exit',
	accelerator: 'CmdOrCtrl+Q',
	click: () => 
	{
		realclose = 1;
		app.quit();
	}
	}
]
},

{
label: 'Edit',
submenu: 
	[
	{ label: 'undo' },
	{ role: 'redo' },
	{ type: 'separator' },
	{ role: 'cut' },
	{ role: 'copy' },
	{ role: 'paste' },
	{ role: 'pasteAndMatchStyle', label: 'Paste Unformatted' },
	{ role: 'delete' },
	{ type: 'separator' },
	{ role: 'selectAll' }
	]
},

{
label: 'View',
submenu:
	[
	{ role: 'reload' },
	{ role: 'forcereload' },
	{ type: 'separator' },
	{ role: 'zoomin' },
	{ role: 'zoomout' },
	{ role: 'resetzoom', label: 'Default Zoom' },
	{ type: 'separator' },
	]
},

{
label: 'Window',
submenu: 
	[
	{
	label: 'Maximize/Restore',
	accelerator: 'CmdOrCtrl+Shift+M',
	click: () => 
	{
		if (mainWindow.isMaximized()) 
		{
			mainWindow.restore()
		} 
		else 
		{
			mainWindow.maximize()
		}
	}
	},

	{ role: 'minimize' },
	{
	label: 'Hide Menubar',
	accelerator: 'Alt+T',
	click: () => 
	{
		if (mainWindow.isMenuBarVisible()) 
		{
			mainWindow.setMenuBarVisibility(false);
		} 
		else 
		{
			mainWindow.setMenuBarVisibility(true);
		}
	}
	},
{
	label: 'Hide Titlebar',
	accelerator: 'Ctrl+Alt+T',
	click: () => {
		if (mainWindow.isTitleBarVisible()) {
			mainWindow.setTitleBarVisibility(false);
		} else {
			mainWindow.setTitleBarVisibility(true);
		}
	}
},
	{ role: 'togglefullscreen' },
	{ type: 'separator' },
	{
	label: 'Hide to Tray',
	accelerator: 'CmdOrCtrl+Shift+H',
	click: () => 
	{
		mainWindow.hide();
	}
	}
	]
},

{
label: 'Tools',
submenu: 
[
	{
	label: 'Text Speeching                      ',
	sublabel: '(not implemented yet)',
	submenu: 
	[
	{ role: 'startSpeaking' },
	{ role: 'stopSpeaking' }
	]
	},

	{
	label: 'Translate',
	sublabel: '(not implemented yet)',
	submenu: 
	[
	{
	label: 'Translate selected text',
	click: () => 
	{
		shell.openExternal('https://www.example.com');
	}
	},
	{
	label: 'Select Target',
	click: () => 
	{
		shell.openExternal('https://www.example.com');
	}
	},
	]
	},
	{ type: 'separator' },
	{ role: 'toggledevtools', label: 'Developer Tools'  },
]

},

{
label: 'Help',
submenu: 
[
	{
	label: 'About Selegram Client',
	icon: 'res/icon32.png',
	submenu: 
	[
		{
		label: 'WebPage                      ',
		icon: 'res/icon32.png',
		sublabel: 'itzselenux.github.io',
		click: () => 
		{
			shell.openExternal('https://itzselenux.github.io/selegram');
		}
		},
		{
		label: 'Source Code',
		sublabel: 'ItzSelenux/selegram',
		icon: gh,
		click: () => {
			shell.openExternal('https://github.com/ItzSelenux/selegram');
		}
		},
		{
		label: 'Issues',
		icon: gh,
		click: () => 
		{
			shell.openExternal('https://github.com/ItzSelenux/selegram/issues');
		}
		}
	]
	},
	{
	label: 'About Telegram',
	icon: 'res/tg.png',
	submenu: [
		{
		label: 'Telegram WebSite',
		icon: 'res/tg.png',
		click: () => {
			shell.openExternal('https://telegram.org');
		}
		},
		{
		label: 'Telegram A source code',
		icon: 'res/tga.png',
		click: () => 
		{
			shell.openExternal('https://github.com/Ajaxy/telegram-tt');
		}
		},
		{
		label: 'Telegram K source code',
		icon: 'res/tgk.png',
		click: () => {
			shell.openExternal('https://github.com/morethanwords/twebg');
		}
		}
	]
	},
	{
	label: 'About Electron',
	icon: 'res/electron.png',
	tooltip: 'https://itzselenux.github.io/selegram',
	click: () => 
	{
		shell.openExternal('https://www.electronjs.org');
	}
	},
	{ type: 'separator' }
]
}
];
module.exports = wmenu;

const menu = Menu.buildFromTemplate(wmenu);

//Load/Save Config Items

//Telegram Client:
function saveTGC(value) 
{
	const data = { tgc: value };
	fs.writeFileSync(tgcFilePath, JSON.stringify(data));
	console.log("tgc saved: " + tgc); 
}

function loadTGC() 
{
try 
{
	const data = JSON.parse(fs.readFileSync(tgcFilePath));
	return data.tgc;
} catch (error) 
{
	return null;
}
}



//Main Window
////////////////////////////////////////////////////////
function saveWindowSize() 
{
if (!mainWindow) return;
const { width, height } = mainWindow.getBounds();
const windowSize = { width, height };
fs.writeFileSync(windowSizeFilePath, JSON.stringify(windowSize));
}

function loadWindowSize() 
{
try 
{
	const windowSize = JSON.parse(fs.readFileSync(windowSizeFilePath));
	return windowSize;
} 
catch (error) 
{
	return null;
}
}
//MainWindow behavior
function createWindow() 
{
const tgc = loadTGC();

	const windowSize = loadWindowSize() || { width: 666, height: 696 };
	mainWindow = new BrowserWindow
	({
	width: windowSize.width,
	height: windowSize.height,
		icon: path.join(__dirname, wicon),
		webPreferences:
		{
			nodeIntegration: false 
			
			
		},
		title: wtitle 
	});

if (tgc === 1) 
{
	mainWindow.loadURL('https://web.telegram.org/k');
	console.log("Client: K");
} 
else if (tgc === 0) 
{
	mainWindow.loadURL('https://web.telegram.org/a');
	console.log("Client: A");
}
 



mainWindow.webContents.on('did-finish-load', () => 
{
  const script = themeScript(); // Call the exported function to get the script
  mainWindow.webContents.executeJavaScript(script);
});

	mainWindow.on('closed', () => 
	{
		mainWindow = null;
	});

	mainWindow.webContents.on('did-finish-load', () => 
	{
		mainWindow.setTitle(wtitle);
	});
	
mainWindow.on('resize', saveWindowSize);

mainWindow.on('closed', () => 
{
	mainWindow = null; // Reset the reference to the window
});



	//Send to tray instead of closing like on TDesktop
	mainWindow.on('close', (event) => 
{
	if (realclose) 
	{
	// Quit the app if realclose is true
		mainWindow = null;
	}
	else 
	{
	// Hide the window instead of closing it
		event.preventDefault();
		mainWindow.hide();
	}
});
	Menu.setApplicationMenu(menu);
	

}

//On Execution things like tray, or handle links
////////////////////////////////////////////////////////
app.whenReady().then(() => 
{
createWindow();

  mainWindow.webContents.on('did-finish-load', () => 
{
	mainWindow.webContents.insertCSS(`
	  @import url('file://${path.join(__dirname, 'styles.css')}');
	`);
});

// Create a tray icon
const trayIconPath = path.join(__dirname, wicon);
appTray = new Tray(trayIconPath);

// Create a context menu for the tray icon
const contextMenu = Menu.buildFromTemplate
([
{
	label: 'Quit Selegram',
	click: () => 
	{
		realclose = 1;
		app.quit();
	}
}
]);


// Set the tray icon's context menu
appTray.setContextMenu(contextMenu);

// Show the window when the tray icon is clicked
appTray.on('click', () => 
	{
	if (mainWindow.isVisible()) 
	{
		mainWindow.hide();
	} 
	else 
	{
		mainWindow.show();
	}
	});
});


//Trash Stuff for basic functionality
////////////////////////////////////////////////////////
app.on('window-all-closed', function() 
{
if (process.platform !== 'darwin') 
{
	app.quit();
}
});

app.on('activate', function() 
{
if (mainWindow === null) 
{
	createWindow();
}
});

