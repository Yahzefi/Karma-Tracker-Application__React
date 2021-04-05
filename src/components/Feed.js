// import React from 'react'
import { useLocation } from "react-router-dom"

const Feed = ({ listItem }) => {
    const location = useLocation()
    return (
        <div className="feed-cont">
                {/* In here will be a conditional return depending on the current location */}
                {location.pathname === '/chapter_one' ?
                <ul style={{listStyle:"none"}}>
                    {listItem}
                </ul>
                : location.pathname === '/chapter_two' ?
                <h2 style={{color:"white"}}>Chapter Two</h2>
                : location.pathname === '/chapter_three' ?
                <h2 style={{color:"white"}}>Chapter Three</h2>
                : location.pathname === '/chapter_four' ?
                <h2 style={{color:"white"}}>Chapter Four</h2>
                : location.pathname === '/chapter_five' ?
                <h2 style={{color:"white"}}>Chapter Five</h2>
                : location.pathname === '/chapter_six' ?
                <h2 style={{color:"white"}}>Chapter Six</h2>
                : ""
                }
        </div>
    )
}

export default Feed
