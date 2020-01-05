import React, { Component } from "react";
import "./contact-list-item.css"

export default class ContactListItem extends Component {


    render() {
        return (
            <div className="contact-list-item" >
                <img src="https://thispersondoesnotexist.com/image" alt="img" />
                <div className="info-wrapper">
                    <h3>
                        {this.props.contact.name}
                    </h3>
                    <h5>
                        {this.props.contact.messages[0].content}
                    </h5>
                    <span>span1</span>
                    <span>span2</span>
                </div>
            </div>
        )
    }
}
