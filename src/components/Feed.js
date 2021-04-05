// import React from 'react'
import { useLocation } from "react-router-dom"

import Section from './Section'

const Feed = ({ actions }) => {
    const location = useLocation()
    return (
        <div className="feed-cont">
            <div className="items-cont">
{            actions.map((act)=>(
                        <Section key={act.id} actionNumber={act.id} actionName={act.title} /> 
                    ))}
            </div>
        </div>
    )
}

export default Feed
