//http://blog.fpmurphy.com/2011/05/more-gnome-shell-customization.html 

const Panel = imports.ui.panel;
const StatusIconDispatcher = imports.ui.statusIconDispatcher;

function init() {
    StatusIconDispatcher.STANDARD_TRAY_ICON_IMPLEMENTATIONS['hime'] = 'hime';
}

function enable() {
}

function disable() {
}
