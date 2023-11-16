import { link } from "fs"
import React from "react"

const Ex2 = () => {
    let links = ["https://www.google.com/", "Example 2", "Example 3"]

    return <div>
        <ol>
            {links.map((link) => <li><a>{link}</a></li>)}
        </ol>
    </div>
}

export default Ex2