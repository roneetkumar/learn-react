import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={{ marginBottom: '20px' }}>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    textAlign: 'center',
    color: 'yellow',
    padding: '50px',
}


const linkStyle = {
    color: 'white',
    textDecoration: 'none',
}

export default Header;
