// import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-cont">
            <div className="sidebar-head">
                <h2>Chapter Select</h2>
            </div>
            <div className="sidebar-content">
                {/* These will be links that connect with Feed.js */}
                <Link to="/chapter_one" className="sidebar-link">Chapter One</Link>
                <Link to="/chapter_two" className="sidebar-link">Chapter Two</Link>
                <Link to="/chapter_three" className="sidebar-link">Chapter Three</Link>
                <Link to="/chapter_four" className="sidebar-link">Chapter Four</Link>
                <Link to="/chapter_five" className="sidebar-link">Chapter Five</Link>
                <Link to="/chapter_six" className="sidebar-link">Chapter Six</Link>
            </div>
        </div>
    )
}

export default Sidebar
