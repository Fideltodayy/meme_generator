import React from "react"

export default function Header() {
    return (
        <header className="header flex items-center h-16 bg-indigo-950 text-white p-5">
            <img 
                src="/meme.png" 
                className="header--image h-full mr-2"
            />
            <h2 className="header--title text-xl mr-auto">Meme Generator</h2>
            <h4 className="header--project text-xs font-normal"></h4>
        </header>
    )
}