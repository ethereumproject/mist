require('./include/common')('splash');
const mist = require('../mistAPI.js');
const { ipcRenderer: ipc, remote, webFrame } = require('electron');
const ipcProviderWrapper = require('../ipc/ipcProviderWrapper.js');
const Web3 = require('web3');
require('../openExternal.js');

require('./include/setBasePath')('interface');

// register with window manager
ipc.send('backendAction_setWindowId');

// get and set language
ipc.send('backendAction_setLanguage', navigator.language);

// disable pinch zoom
webFrame.setZoomLevelLimits(1, 1);

window.ipc = ipc;
window.mist = mist();
window.web3 = new Web3(new Web3.providers.IpcProvider('', ipcProviderWrapper));
