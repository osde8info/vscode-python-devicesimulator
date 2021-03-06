// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as React from "react";
import "./App.css";
import { DEVICE_LIST_KEY, VSCODE_MESSAGES_TO_WEBVIEW } from "./constants";
import { Device } from "./container/device/Device";

interface IState {
    currentDevice: string;
}

const defaultState = {
    currentDevice: DEVICE_LIST_KEY.CPX,
};

class App extends React.Component<{}, IState> {
    constructor() {
        super({});
        this.state = defaultState;
    }
    componentDidMount() {
        if (document.currentScript) {
            const initialDevice = document.currentScript.getAttribute(
                "initialDevice"
            );

            if (initialDevice) {
                this.setState({ currentDevice: initialDevice });
            }
        }
        window.addEventListener("message", this.handleMessage);
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.handleMessage);
    }

    render() {
        return (
            <div className="App">
                <main className="App-main">
                    <Device currentSelectedDevice={this.state.currentDevice} />
                </main>
            </div>
        );
    }

    handleMessage = (event: any): void => {
        const message = event.data;
        console.log(JSON.stringify(message));
        if (
            message.command === VSCODE_MESSAGES_TO_WEBVIEW.SET_DEVICE &&
            message.active_device !== this.state.currentDevice
        ) {
            this.setState({ currentDevice: message.active_device });
        }
    };
}

export default App;
