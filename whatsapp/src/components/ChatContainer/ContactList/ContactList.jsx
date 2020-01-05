import React, { Component } from "react";
import "./contact-list.css"
import { ReactComponent as SearchIcon } from '../../../svg/search.svg';
import { ReactComponent as MessageIcon } from '../../../svg/message.svg';
import { ReactComponent as MenuIcon } from '../../../svg/menu.svg';
import { ReactComponent as StatusIcon } from '../../../svg/status.svg';
import ContactListItem from "./ContactListItem";

export default class ContactList extends Component {

    state = {
        contacts: [
            {
                name: "roops",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "vinays",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "shivams",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "sunils",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "sharmas",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "roops",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "vinays",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "shivams",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "sunils",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            },
            {
                name: "sharmas",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            },
            {
                name: "roops",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "vinays",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "shivams",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "sunils",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            }, {
                name: "sharmas",
                messages: [
                    {
                        date: "12/2/2020",
                        content: "msg"
                    },
                    {
                        date: "12/2/2020",
                        content: "msg"
                    }
                ]
            },

        ]
    }

    render() {
        return (
            <div className='contact-list-container'>
                <header>
                    <img src="https://thispersondoesnotexist.com/image" alt="profile-pic" />
                    <StatusIcon title="Status" fill="rgba(0,0,0,0.2)" height="22px" width="22px" />
                    <MessageIcon title="Message" fill="rgba(0,0,0,0.2)" height="22px" width="22px" />
                    <MenuIcon title="Menu" fill="rgba(0,0,0,0.2)" height="22px" width="22px" />
                </header>
                <div className="search-container">
                    <div className="search">
                        <SearchIcon fill="rgba(0,0,0,0.2)" height="18px" width="18px" />
                        <input type="text" placeholder="Search or start new chat" />
                    </div>
                </div>


                <div className="contact-list-items">
                    {
                        this.state.contacts.map((contact, i) => <ContactListItem key={i} contact={contact} />)
                    }
                </div>
            </div>
        )
    }
}
