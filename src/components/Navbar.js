// import React from 'react'

const Navbar = ({ navClick }) => {
    return (
        <nav className="h-nav">
            <span className="nav-item" onClick={navClick}><p style={{margin: 0}} id="login">LOGIN</p></span>
            <span className="nav-item" onClick={navClick}><p style={{margin: 0}} id="register">REGISTER</p></span>
        </nav>
    )
}

export default Navbar
