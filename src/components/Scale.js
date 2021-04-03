import React, { useState } from 'react'

const Scale = () => {
    const [karmaStatus, setKarmaStatus] = useState(50)
    return (
        <div className="scale-cont">
            <div className="scale-box">
                <div className="scale-fill" style={karmaStatus <= 40 ? {backgroundColor: "red", width: `${karmaStatus}%`} : karmaStatus >= 40 && karmaStatus <= 60 ? {backgroundColor: "yellow", width: `${karmaStatus}%`} : {backgroundColor: 'green', width: `${karmaStatus}%`}}>
                    <p style={{textAlign: "center"}}>Progress</p>
                </div>
            </div>
            <div className="scale-bar">

            </div>
        </div>
    )
}

export default Scale
