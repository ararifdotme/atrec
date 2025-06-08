/* eslint-disable no-var */
export { }; // mark as module to avoid polluting global scope

declare global {
	var mainWindow: Electron.BrowserWindow;
	var cnf: {
		recordingMode: string;
		videoInDeviceId: string | null;
		audioInDeviceId: string | null;
		recordingWindowPosition: { x: number | null; y: number | null };
		camWindowPosition: { x: number | null; y: number | null };
		canvasConfig: {
			fillColor: string;
			strokeColor: string;
			toolWidth: number;
			toolbarPosition: { top: number | null; left: number | null };
		};
		atrecWebUrl: string;
		googleApiRefreshToken: string | null;
		atrecWebApiToken: string | null;
	};
	var log: {
		info: (...args: any[]) => void;
		warn: (...args: any[]) => void;
		error: (...args: any[]) => void;
		debug: (...args: any[]) => void;
	};
}