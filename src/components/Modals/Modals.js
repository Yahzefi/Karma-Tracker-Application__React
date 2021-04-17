// import React from 'react'

import { useState } from "react"

const Modals = ({ validateUser, registerUser, display, changeDisplay }) => {
    // updates/maintains input values
    const [logInputs, setLogInputs] = useState({
        logUser: "",
        logPass: ""
    })
    const [regInputs, setRegInputs] = useState({
        regUser: "",
        regPass: '',
        regFirstName: '',
        regLastName: '',
        regEmail: '',
        regPhoneNumber: ''
    })
    return (
        // Modal Container (Slightly transparent black background & takes up entirety of screen)
        <div 
        className="modal-cont" 
        style={ display.logModal || display.regModal ? {display: "block"} : {display: ""}}
        >
            {/* login modal */}
            <div 
            className="log-modal" 
            style={ display.logModal ? {display: "flex"} : {display: ""}}
            >
                {/* close modal 'x' */}
                <span 
                className="close-btn" 
                id="log_close" 
                onClick={(ev)=>changeDisplay(ev)}
                >&times;</span>
                <div className="modal-head">
                <h2>LOGIN</h2>
                </div>
                {/* all specific modal content (contains all the labels and inputs for the login form) */}
                <div className="modal-content lg-ct">
                    {/* Username */}
                    <label className="modal-label">Username:</label>
                    <input 
                    className="modal-input" 
                    value={logInputs.logUser}
                    onChange={(e)=> setLogInputs({ ...logInputs, logUser: e.target.value })}/>
                    {/* Password */}
                    <label className="modal-label">Password:</label>
                    <input 
                    className="modal-input" 
                    value={logInputs.logPass}
                    onChange={(e)=> setLogInputs({ ...logInputs, logPass: e.target.value })}
                    />
                    {/* Register for an account */}
                    <p className="reg-msg">Don't have an account?  No problem!  Register <span 
                    className="reg-link"
                    id="registry_link"
                    onClick={(ev)=>changeDisplay(ev)}
                    >here</span>.</p>
                    {/* Submit Button */}
                    <button 
                    className="log-submit" 
                    onClick={()=>{
                        validateUser(logInputs);
                        setLogInputs({
                            logUser: "", 
                            logPass: ""
                        })
                    }}>SUBMIT</button>
                </div>
            </div>
            {/* register modal */}
            <div 
            className="reg-modal" 
            style={ display.regModal ? {display: "flex"} : {display: ""}}
            >
                {/* close modal 'x' */}
                <span 
                className="close-btn" 
                id="reg_close" 
                onClick={(ev)=>changeDisplay(ev)}
                >&times;</span>
                <div className="modal-head">
                    <h2>REGISTER</h2>
                </div>
                {/* all specific modal content (contains all the labels and inputs for the register form) */}
                <div className="modal-content rg-ct">
                    {/* username */}
                    <label className="modal-label">Username:</label>
                    <input 
                    className="modal-input reg-inp"
                    value={regInputs.regUser}
                    onChange={(e)=>setRegInputs({ ...regInputs, regUser: e.target.value})}
                    />
                    {/* password */}
                    <label className="modal-label">Password:</label>
                    <input 
                    className="modal-input reg-inp"
                    value={regInputs.regPass}
                    onChange={(e)=>setRegInputs({ ...regInputs, regPass: e.target.value })}
                    />
                    {/* first name */}
                    <label className="modal-label">First Name:</label>
                    <input 
                    className="modal-input reg-inp"
                    value={regInputs.regFirstName}
                    onChange={(e)=>setRegInputs({ ...regInputs, regFirstName: e.target.value })}
                    />
                    {/* last name */}
                    <label className="modal-label">Last Name:</label>
                    <input 
                    className="modal-input reg-inp" 
                    value={regInputs.regLastName}
                    onChange={(e)=>setRegInputs({ ...regInputs, regLastName: e.target.value })}
                    />
                    {/* email */}
                    <label className="modal-label">Email Address:</label>
                    <input 
                    className="modal-input reg-inp"
                    value={regInputs.regEmail}
                    onChange={(e)=>setRegInputs({ ...regInputs, regEmail: e.target.value })}
                    />
                    {/* phone number */}
                    <label className="modal-label">Phone Number:</label>
                    <input 
                    className="modal-input reg-inp"
                    value={regInputs.regPhoneNumber}
                    onChange={(e)=>setRegInputs({ ...regInputs, regPhoneNumber: e.target.value })}
                    />
                    {/* submit button */}
                    <button 
                    className="reg-submit" 
                    onClick={()=>{
                        registerUser(regInputs);
                        setRegInputs({
                            regUser: "",
                            regPass: '',
                            regFirstName: '',
                            regLastName: '',
                            regEmail: '',
                            regPhoneNumber: ''
                        })
                    }}>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Modals
