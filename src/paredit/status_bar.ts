'use strict';
import { window, StatusBarAlignment, StatusBarItem } from 'vscode';
import statusbar from '../statusbar';

export class StatusBar {

    private _enabled: Boolean;
    private _visible: Boolean;

    private _toggleBarItem: StatusBarItem;

    constructor(enabled = true, strict = true, visible = true) {
        this._toggleBarItem = window.createStatusBarItem(StatusBarAlignment.Right);
        this._toggleBarItem.text = "(λ)";
        this._toggleBarItem.command = 'paredit.toggle';
        this.enabled = enabled;
        this.visible = visible;
    }

    get enabled() {
        return this._enabled;
    }

    set enabled(value: Boolean) {
        this._enabled = value;

        if (this._enabled) {
            this._toggleBarItem.tooltip = "Disable Paredit"
            this._toggleBarItem.color = statusbar.color.active;
        } else {
            this._toggleBarItem.tooltip = "Enable Paredit"
            this._toggleBarItem.color = statusbar.color.inactive;
        }
    }

    get visible(): Boolean {
        return this._visible;
    }

    set visible(value: Boolean) {
        if (value) {
            this._toggleBarItem.show();
        } else {
            this._toggleBarItem.hide();
        }
    }

    dispose() {
        this._toggleBarItem.dispose();
    }
}