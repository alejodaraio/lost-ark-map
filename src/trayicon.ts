import { Tray, Menu, App } from 'electron';
import * as path from 'path';

const trayIcon = (app: App): Tray => {
    let tray: Tray;
    const iconPath = path.join(__dirname, '../../src/assets/favicon.ico');
    tray = new Tray(iconPath);

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Exit', 'click': app.quit }
    ]);

    tray.setToolTip('Lost Ark Map');
    tray.setContextMenu(contextMenu);

    return tray;
}

export default trayIcon;