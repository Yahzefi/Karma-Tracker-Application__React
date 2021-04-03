// import React from 'react'

const Navbar = ({ navClick }) => {
    return (
        <nav className="h-nav">
            <span className="nav-item" onClick={navClick}><p id="login">LOGIN</p></span>
            <span className="nav-item" onClick={navClick}><p id="register">REGISTER</p></span>
        </nav>
    )
}

export default Navbar
