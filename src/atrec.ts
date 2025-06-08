import { app } from "electron";
import { openMainWindow } from "./main/windows/mainWindow";
import { getAllCnf } from 'electron-cnf';
import log from 'electron-log/main';

app.on("ready", () => {
    // Initialize global configuration object
    // This will be used to store application-wide settings and configurations
    global.cnf = {
        //default config
        recordingMode: "screen-camera",
        videoInDeviceId: null,
        audioInDeviceId: null,
        recordingWindowPosition: { x: null, y: null },
        camWindowPosition: { x: null, y: null }, // only used for rounded camera window of screen-camera mode
        canvasConfig: {
            fillColor: "#FFFFFF00",
            strokeColor: "#F40000",
            toolWidth: 1,
            toolbarPosition: { top: null, left: null },
        },
        atrecWebUrl: "https://www.atrec.app",
        googleApiRefreshToken: null,
        atrecWebApiToken: null,
        // user config. default config will be overridden by user config
        ...getAllCnf(),
    };

    global.log = log;

    log.info("App ready");

    openMainWindow(); // Open atrec main window
});