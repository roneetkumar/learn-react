import React, { Component } from "react";
import "./chat-container.css"
import ContactList from "./ContactList/ContactList";
import Display from "./Display/Display.jsx";


export default class ChatContainer extends Component {
    render() {
        return (
            <div className='chat-container'>
                <ContactList />
                <Display />
            </div>
        )
    }
}
