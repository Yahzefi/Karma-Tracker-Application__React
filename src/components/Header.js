import { useContext } from "react"

import { ThemeContext } from "../contexts/themeContext"

const Header = () => {
    const themes = useContext(ThemeContext)
    return (
        <div className="h-cont" style={{backgroundColor: themes.dark.background, color:themes.dark.foreground}}>
            <h2>Welcome to the Karma Tracker!</h2>
        </div>
    )
}

export default Header
