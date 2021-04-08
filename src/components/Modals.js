// import React from 'react'

const Modals = () => {
    return (
        <div className="modal-cont">
            <div className="log-modal">
                <div className="modal-content lg-ct">
                    <label className="modal-label" style={{gridRow: "1 / 1", gridColumn: "1 / 1"}}>Username</label>
                    <input className="modal-input" style={{gridRow: "1 / 1", gridColumn: "2 / 2"}}/>
                    <label className="modal-label" style={{gridRow: "2 / 2", gridColumn: "1 / 1"}}>Password</label>
                    <input className="modal-input" style={{gridRow: "2 / 2", gridColumn: "2 / 2"}}/>
                    <button className="modal-submit">SUBMIT</button>
                </div>
            </div>
            <div className="reg-modal" style={{display: ""}}>
                <div className="modal-content rg-ct">
                    <p>label</p>
                    <p>input</p>
                    <p>label</p>
                    <p>input</p>
                    <p>label</p>
                    <p>input</p>
                    <p>label</p>
                    <p>input</p>
                    <p>label</p>
                    <p>input</p>
                    <p>label</p>
                    <p>input</p>
                    <p style={{textAlign: "center"}}>button</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Modals
