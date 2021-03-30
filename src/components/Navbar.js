// import React from 'react'

const Navbar = ({ navClick }) => {
    return (
        <nav className="h-nav">
            <span className="nav-item" onClick={navClick}><p>LOGIN</p></span>
            <span className="nav-item" onClick={navClick}><p>REGISTER</p></span>
        </nav>
    )
}

export default Navbar
