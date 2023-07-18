import React from "react";

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

function ToolBarSearchForm({theme}) {
    return <>
        <div className="mb-1">
            <input style={theme} />
            <button style={theme}>Rechercher</button>
        </div>
    </>
}

function ToolBarButton({theme}) {
    return <>
        <div className="mb-3">
            <ToolBarSearchForm theme={theme} />
            <button style={theme}>Je m'inscris</button>
        </div>
    </>
}

export function ToolbarClassic() {
    return <>
        <div className="mb-3 bg-white">
            <ToolBarButton theme={themeColor.dark} />
        </div>
    </>
}