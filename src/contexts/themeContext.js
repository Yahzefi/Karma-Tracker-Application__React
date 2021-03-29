import React from "react"

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

export const ThemeContext = React.createContext()

const ThemeContextProvider = (props) => {
    return (
        <ThemeContext.Provider value={themes} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;