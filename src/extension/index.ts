import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-todo" is now active!');
    let disposable = vscode.commands.registerCommand('vscode-todo.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from vscode-todo!');
    });

    context.subscriptions.push(disposable);
    const pannel = vscode.window.createWebviewPanel(
        'test',
        'test',
        { viewColumn: vscode.ViewColumn.Active },
        { enableScripts: true },
    );

    const url = vscode.Uri.file(path.join(context.extensionPath, 'dist/webview/index.js'))
        .with({ scheme: 'vscode-resource' })
        .toString();

    pannel.webview.html = `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>测试</title>
        </head>
        <body>
            <div id="app"></div>
            <script src="${url}"></script>
        </body>
    </html>`;
}

export function deactivate() {}
