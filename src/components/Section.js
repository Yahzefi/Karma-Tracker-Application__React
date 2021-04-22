import { useEffect, useState } from "react"

const Section = ({ chapterName, chapterKarma, karmaValue, actionNumber, actionName, actionLocation, changeScore, currentLocalStorage, updateLocalStorage }) => {
    const [isChecked, setChecked] = useState(false)
    useEffect(()=>{
        currentLocalStorage.forEach((item)=>{
            if(item.localKey === "checkBoxStatus_" + chapterName + "_" + actionNumber){
                setChecked(JSON.parse(item.localValue));
            }
        })
        // changeScore(isChecked, chapterKarma, karmaValue)
        // FIX THE SCALE SCORE! //
    })
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
                updateLocalStorage(!isChecked, chapterName, actionNumber, karmaValue, chapterKarma)
                changeScore(!isChecked, chapterKarma, karmaValue)
            }} 
            checked={isChecked}
            />
        </div>
    )
}

export default Section
