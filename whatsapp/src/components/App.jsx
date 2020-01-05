import React, { Component } from "react";
import "./app.css"
import ChatContainer from "./ChatContainer/ChatContainer";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <ChatContainer />
            </React.Fragment>
        )
    }
}
