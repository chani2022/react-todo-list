import React from "react"

export const Header = React.memo(() => {
    return (
        <nav>
            <h2><strong>TodoMatic</strong></h2>
            <h4><strong>What needs to be done?</strong></h4>
        </nav>
    )
})