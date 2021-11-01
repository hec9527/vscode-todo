declare interface AnyFunction {
    (...args: any[]): any;
}

/** Host 发送的消息 */
declare type IHostMessage = {
    type: '';
    data: '';
};

/** webview发送的消息类型 */
declare type IWebviewMessage = {
    //
};

declare interface Window {
    acquireVsCodeApi(): {
        postMessage(msg: IWebviewMessage): void;
        getState(): any;
        setState(state: any): any;
    };
}
