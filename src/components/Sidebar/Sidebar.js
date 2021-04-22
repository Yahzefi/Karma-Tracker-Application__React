// import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ changeChapter }) => {
    const location = useLocation();
    return (
        <div className="sidebar-cont" style={ location.pathname === "/" ? { height: "60vh" } : {height: ""}}>
            <div className="sidebar-head">
                <h2>CHAPTER SELECT</h2>
            </div>
            <div className="sidebar-content">
                {/* These will be links that connect with Feed.js */}
                <Link to="/" className="sidebar-link home-link" onClick={()=>changeChapter(0)}>Go Back</Link>
                <Link to="/chapter_one" className="sidebar-link" onClick={()=>changeChapter(1)}>Chapter One</Link>
                <Link to="/chapter_two" className="sidebar-link" onClick={()=>changeChapter(2)}>Chapter Two</Link>
                <Link to="/chapter_three" className="sidebar-link" onClick={()=>changeChapter(3)}>Chapter Three</Link>
                <Link to="/chapter_four" className="sidebar-link" onClick={()=>changeChapter(4)}>Chapter Four</Link>
                <Link to="/chapter_five" className="sidebar-link" onClick={()=>changeChapter(5)}>Chapter Five</Link>
                <Link to="/chapter_six" className="sidebar-link" onClick={()=>changeChapter(6)}>Chapter Six</Link>
            </div>
        </div>
    )
}

export default Sidebar
