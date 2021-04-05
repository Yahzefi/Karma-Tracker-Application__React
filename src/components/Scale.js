import { useState } from "react"

const Section = ({ chapterName, actionNumber, actionName }) => {
    const [isChecked, setChecked] = useState(false)
    return (
        <div className="item-cont" id={chapterName}>
            <p className="item-num">{actionNumber}</p>
            <p className="item-name">{actionName}</p>
            <input className="act-check"  type="checkbox" onChange={()=>setChecked(!isChecked)} checked={isChecked}/>
        </div>
    )
}

export default Section
