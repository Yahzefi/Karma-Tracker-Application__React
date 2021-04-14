// import React from 'react'
import logo from '../Images/header_logo.png';

const Footer = () => {
    return (
        <div className="foot-cont">
            <div className="gameLinks-cont" >
                <h4 style={{marginBottom: "5%"}}>GAME LINKS</h4>
                <a href="#">Fallout 3</a>
                <a href="#">Fallout New Vegas</a>
                <a href="#">Fallout 4</a>
                <a href="#">Fallout 76</a>
            </div>
            <div className="brand-cont">
                <img src={logo} className="foot-logo"/>
                <p>&copy; Karma Tracker</p>
            </div>
            <div className="contact-cont">
                <h4 style={{marginBottom: "5%"}}>SOCIAL MEDIA LINKS</h4>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">YouTube</a>
            </div>
        </div>
    )
}

export default Footer
