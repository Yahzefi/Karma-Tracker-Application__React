// import React from 'react'

import { useState } from "react"

const Modals = ({ validateUser, registerUser, display, changeDisplay }) => {
    const [inputs, setInputs] = useState({
        logUser: "",
        logPass: ""
    })
    return (
        <div className="modal-cont" style={ display.logModal || display.regModal ? {display: "block"} : {display: ""}}>
            <div className="log-modal" style={ display.logModal ? {display: "flex"} : {display: ""}}>
                <span className="close-btn" id="log_close" onClick={(ev)=>changeDisplay(ev)}>&times;</span>
                <div className="modal-head">
                <h2>LOGIN</h2>
                </div>
                <div className="modal-content lg-ct">
                    <label className="modal-label" style={{gridRow: "1 / 1", gridColumn: "1 / 1"}}>Username:</label>
                    <input 
                    className="modal-input" 
                    style={{gridRow: "1 / 1", gridColumn: "2 / 2"}} 
                    onChange={(e)=> setInputs({ ...inputs, logUser: e.target.value })}/>
                    <label className="modal-label" style={{gridRow: "2 / 2", gridColumn: "1 / 1"}}>Password:</label>
                    <input 
                    className="modal-input" 
                    style={{gridRow: "2 / 2", gridColumn: "2 / 2"}} 
                    onChange={(e)=> setInputs({ ...inputs, logPass: e.target.value })}
                    />
                    <button className="log-submit" onClick={()=>validateUser(inputs)}>SUBMIT</button>
                </div>
            </div>
            <div className="reg-modal" style={ display.regModal ? {display: "flex"} : {display: ""}}>
                <span className="close-btn" id="reg_close" onClick={(ev)=>changeDisplay(ev)}>&times;</span>
                <div className="modal-head">
                    <h2>REGISTER</h2>
                </div>
                <div className="modal-content rg-ct">
                    <label className="modal-label">Username:</label>
                    <input className="modal-input reg-inp"/>
                    <label className="modal-label">Password:</label>
                    <input className="modal-input reg-inp"/>
                    <label className="modal-label">First Name:</label>
                    <input className="modal-input reg-inp" />
                    <label className="modal-label">Last Name:</label>
                    <input className="modal-input reg-inp" />
                    <label className="modal-label">Email Address:</label>
                    <input className="modal-input reg-inp"/>
                    <label className="modal-label">Phone Number:</label>
                    <input className="modal-input reg-inp" />
                    <button className="reg-submit" onClick={()=>registerUser(inputs)}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Modals
