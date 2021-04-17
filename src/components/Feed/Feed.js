// import React from 'react'
import { useLocation } from "react-router-dom"

import Section from '../Section'

const Feed = ({ actions, chapterName, currentLocalStorage, changeScore, updateLocalStorage }) => {
    const location = useLocation()
    return (
        <div className="feed-cont">
            {location.pathname !== '/' &&
            <div className="item-head">
                <h4>Number</h4>
                <h4 style={{textAlign:"center"}}>Action Name</h4>
                <h4 style={{textAlign:"center"}}>Location</h4>
                <h4 style={{textAlign:"center"}}>Done?</h4>
            </div>
            }
            <div className="items-cont">
                {
                    actions.map((act)=>(
                        <Section 
                            key={`${chapterName}_${act.id}`} 
                            chapterName={chapterName}
                            chapterKarma={act.karmaType}
                            karmaValue={act.value} 
                            actionNumber={act.id} 
                            actionName={act.title} 
                            actionLocation={act.location}
                            currentLocalStorage={currentLocalStorage}
                            changeScore={changeScore}
                            updateLocalStorage={updateLocalStorage}
                        /> 
                    ))
                }
            </div>
        </div>
    )
}

export default Feed
