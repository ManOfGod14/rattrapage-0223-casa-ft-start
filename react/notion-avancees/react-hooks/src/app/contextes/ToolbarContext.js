import React, { createContext, useCallback, useContext, useState } from "react";

const themeColor = {
    dark: {
        background: '#000',
        color: '#FFF',
        border: 'solid 2px #FFF',
        margin: "3px"
    },
    light: {
        background: '#FFF',
        color: '#000',
        border: 'solid 2px #000',
        margin: "3px"
    }
}

// création d'un context avec sa valeur par défaut
// const ThemeContext = React.createContext(themeColor.dark)
const ThemeContext = createContext(themeColor.dark)

function ContextButton({children}) {
    const value = useContext(ThemeContext)

    return <button style={value}>{children}</button>
}

class ContextButtonClass1 extends React.Component {
    render() {
        const {children} = this.props

        return <ThemeContext.Consumer>
            {
                value => {
                    return <button style={value}>{children}</button>
                }
            }
        </ThemeContext.Consumer>
    }
}

class ContextButtonClass2 extends React.Component {
    render() {
        const {children} = this.props
        const value = this.context

        return <button style={value}>{children}</button>
    }
}
ContextButtonClass2.contextType = ThemeContext

function ContextInput() {
    const value = useContext(ThemeContext)
    return <input style={value }/>
}

function ContextSerachForm() {
    return <>
        <div className="mb-1">
            <ContextInput />

            <ContextButtonClass1>Filtrer</ContextButtonClass1>

            <ContextButtonClass2>Rechercher</ContextButtonClass2>
        </div>
    </>
}

function ToolBar() {
    return <>
        <div className="mb-3">
            <ContextSerachForm value/>

            <ContextButton>Je m'inscris</ContextButton>
        </div>
    </>
}

export function ToolbarContext() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = useCallback(function() {
        setTheme(t => t === 'light' ? 'dark' : 'light')
    }, [])

    const currentTheme = (theme === 'light') ? themeColor.dark : themeColor.light

    return <>
        <div className="mb-3 bg-white">
            <ThemeContext.Provider value={currentTheme}>
                <ToolBar />
            </ThemeContext.Provider>

            <button className="btn btn-primary btn-sm my-1 mx-1"
                onClick={toggleTheme}
            >
                Change theme
            </button>
        </div>
    </>
}