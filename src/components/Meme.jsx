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
        <main className=" p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ">
                <input 
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={meme.topText}
                    className="form--input  border-4 border-black rounded-md p-2 w-full"
                    onChange={handleChange}
/>
                <input 
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    className="form--input  border-4 border-black rounded-md p-2  w-full"
                    onChange={handleChange}
                />
                <button className=" mt-2 grid-cols-1 border-2 border-black rounded-lg bg-blue-950 text-white cursor-pointer w-full font-extrabold text-xl" onClick={getMemeImage}>Generate</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <div className=" h-8 absolute bottom-0 right-0">
                    <p className="text-white text-center text-sm">@Fideltodayy</p>
                </div>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}