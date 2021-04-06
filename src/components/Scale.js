
const Scale = ({ karmaStatus, currentKarma }) => {
    return (
        <div className="scale-cont">
            <div className="scale-num">
                <span>0</span>
                <span style={{paddingLeft:"22.5%"}}>25</span>
                <span style={{textAlign: "center"}}>50</span>
                <span style={{paddingLeft: "72.5%"}}>75</span>
                <span style={{textAlign: "right"}}>100</span>
            </div>
            <div className="scale-box">
                <div className="scale-fill" style={karmaStatus <= 40 ? {backgroundColor: "red", width: `${karmaStatus}%`} : karmaStatus >= 40 && karmaStatus <= 60 ? {backgroundColor: "yellow", width: `${karmaStatus}%`} : {backgroundColor: 'green', width: `${karmaStatus}%`}}>
                    <p style={{textAlign: "center"}}>{currentKarma}</p>
                </div>
            </div>
            <span className="scale-bar bar-0"></span>
            <span className="scale-bar bar-25"></span>
            <span className="scale-bar bar-50"></span>
            <span className="scale-bar bar-75"></span>
            <span className="scale-bar bar-100"></span>
        </div>
    )
}

export default Scale
