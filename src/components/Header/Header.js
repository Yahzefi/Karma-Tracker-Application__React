import { useState } from "react"

import Navbar from "../Navbar"

import logo from '../../Images/header_logo.png'

const Header = ({ pullModal }) => {
    const [logoAnimation, setLogoAnimation] = useState(true)

    return (
        <div className="h-cont">
            <Navbar navClick={(ev)=>pullModal(ev)}/>
            <h1 className="h-title">The Karma Tracker</h1>
            <img src={logo} alt="logo" id="page_logo" className="h-logo" style={logoAnimation ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}} onClick={()=>setLogoAnimation(!logoAnimation)}/>
        </div>
    )
}

export default Header
