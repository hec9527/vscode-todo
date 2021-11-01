import * as vscode from 'vscode';
import * as path from 'path';
import * as CMD from '../constants/command';

import ViewManager from './view-manager';
import messageHandler from './message-handler';

const webviewPanel: { current: vscode.WebviewPanel | null } = { current: null };

export function activate(context: vscode.ExtensionContext) {
    console.log('vscode-todo is now active!');

    context.subscriptions.push(
        vscode.commands.registerCommand(CMD.SHOW_WEBVIEW, () => {
            const iconPath = vscode.Uri.file(path.join(context.extensionPath, 'assets/todo.png'));
            const jsPath = vscode.Uri.file(path.join(context.extensionPath, 'dist/webview/index.js'))
                .with({ scheme: 'vscode-resource' })
                .toString();
            webviewPanel.current = ViewManager.getView({
                jsPath,
                iconPath,
                messageHandler,
            });
            webviewPanel.current.onDidDispose(() => (webviewPanel.current = null));
        }),
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(CMD.POST_INFO, (data: any) => {
            if (!webviewPanel.current) {
                vscode.commands.executeCommand(CMD.SHOW_WEBVIEW);
            }
            webviewPanel.current?.webview.postMessage(data);
        }),
    );
}

export function deactivate() {
    /** 销毁webview */
    webviewPanel.current?.dispose();
}
