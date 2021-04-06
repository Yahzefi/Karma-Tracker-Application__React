import { useState } from "react"

const Section = ({ chapterName, chapterKarma, karmaValue, actionNumber, actionName, actionLocation, changeScore }) => {
    const [isChecked, setChecked] = useState(false)
    return (
        <div className="item-cont" id={`${chapterName}_${chapterKarma}`}>
            <p className="item-num">{actionNumber}</p>
            <p className="item-name">{actionName}</p>
            <p className="item-location">{actionLocation}</p>
            <input 
            className="act-check"  
            type="checkbox" 
            onChange={()=>{
                setChecked(!isChecked)
                changeScore(!isChecked, chapterKarma, karmaValue)
            }} 
            checked={isChecked}
            />
        </div>
    )
}

export default Section
