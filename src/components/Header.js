import { useState } from "react"

import Navbar from "./Navbar"

import logo from '../Images/header_logo.png'

// import { ThemeContext } from "../contexts/themeContext"

// const Header = () => {
//     const themes = useContext(ThemeContext)
//     const [currentTheme, setCurrentTheme] = useState('light')
//     return (
//         <div className="h-cont" style={currentTheme === 'light' ? {backgroundColor: themes.light.background, color:themes.light.textColor} : {backgroundColor: themes.dark.background, color: themes.dark.textColor}}>
//             <h2>Welcome to the Karma Tracker!</h2>
//             <button 
//             className="theme-btn" 
//             style={currentTheme === 'light' ? {backgroundColor: themes.dark.background, color: themes.dark.textColor} : {backgroundColor: themes.light.background, color: themes.light.textColor}}
//             onClick={currentTheme === 'light' ? ()=>setCurrentTheme('dark') : ()=>setCurrentTheme("light")}
//             >Change Theme</button>
//         </div>
//     )
// }

const Header = () => {
    const [logoAnimation, setLogoAnimation] = useState(true)

    const pullModal = (ev) => {
        switch(ev.target.id){
            case "login":
                console.log("login modal")
                break;
            case "register":
                console.log("register modal")
                break;
            default:
                throw Error("Navigation Item Not Found")
        }
    }

    return (
        <div className="h-cont">
            <Navbar navClick={(ev)=>pullModal(ev)}/>
            <h1 className="h-title">The Karma Tracker</h1>
            <img src={logo} alt="logo" id="page_logo" className="h-logo" style={logoAnimation ? {animationPlayState: 'running'} : {animationPlayState: 'paused'}} onClick={()=>setLogoAnimation(!logoAnimation)}/>
        </div>
    )
}

export default Header
