import * as vscode from 'vscode';

interface IWebviewConfig {
    /** vscode-resource加载js资源 */
    jsPath: string;
    /** vscode-resource配置webview图标 */
    iconPath: vscode.Uri | { light: vscode.Uri; dark: vscode.Uri } | undefined;
    /** webview消息处理程序 */
    messageHandler: AnyFunction;
}

const WEBVIEW_TITLE = 'Vscode-Todo';
const WEBVIEW_TYPE = 'TODO';
const WEBVIEW_CONFIG: vscode.WebviewOptions & vscode.WebviewPanelOptions = {
    enableScripts: true,
    enableFindWidget: true,
    enableCommandUris: true,
    retainContextWhenHidden: true,
    // localResourceRoots: [],    TODO 这个属性怎么用
};

/**
 * 负责创建、维护、销毁 webview
 */
class ViewManager {
    private static view: vscode.WebviewPanel | null = null;
    private view: vscode.WebviewPanel;

    private constructor(config: IWebviewConfig) {
        console.log('create Webview!');
        this.view = vscode.window.createWebviewPanel(
            WEBVIEW_TYPE,
            WEBVIEW_TITLE,
            vscode.ViewColumn.Active,
            WEBVIEW_CONFIG,
        );
        this.view.webview.html = this.getWebviewHTML(config.jsPath);
        this.view.iconPath = config.iconPath;
        this.view.webview.onDidReceiveMessage(config.messageHandler);
        this.view.onDidDispose(() => {
            ViewManager.view = null;
            console.log('Webview is disposed!');
        });
    }

    public static getView(config: IWebviewConfig) {
        if (!ViewManager.view) {
            ViewManager.view = new ViewManager(config).view;
        }
        return ViewManager.view;
    }

    private getWebviewHTML(jsPath: string) {
        return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title></title></head><body><div id="app"></div><script src="${jsPath}"></script></body></html>`;
    }
}

export default ViewManager;
