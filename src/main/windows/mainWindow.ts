import { BrowserWindow } from 'electron';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

function openMainWindow(): void {
  if (typeof mainWindow != "undefined" && !mainWindow?.isDestroyed()) {
    // Focus main window if it is already open
    // This check required because from recordingWindowController recording:stop event could emit mainWindow:open multiple times
    // Ex: recordingWindowController recording:stop event fires for both show loading popup and show success (video url) popup
    mainWindow.focus();
    return;
  }

  global.mainWindow = new BrowserWindow({
    frame: false,
    transparent: true,
    width: 520,
    height: 600,
    fullscreenable: false,
    resizable: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();

  log.info("App main window opened");
}

export { openMainWindow };