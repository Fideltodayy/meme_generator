import React from "react"
import memesData from "../../memesDAta"

export default function () {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImages,setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNUmber = Math.floor(Math.random() * memesArray.length)
        const  url = memesArray[randomNUmber].url
        setMeme(prevMeme => ({...prevMeme, randomImage: url}))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({...prevMeme, [name]: value}))
    }
    
    return(
        <main>
            <div className="form grid grid-cols-2 grid-rows-2 h-40 w-40 gap-4 mb-17">
                <input 
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={meme.topText}
                    className="form--input border-4 border-black rounded-xl"
                    onChange={handleChange}
/>
                <input 
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    className="form--input border-4 border-black rounded-xl text-indent-2"
                    onChange={handleChange}
                />
                <button className=" grid-cols-1 border-2 border-black rounded-lg bg-gradient-to-b bg-violet-950 text-white cursor-pointer" onClick={getMemeImage}>Generate</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}