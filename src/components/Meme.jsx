import React from "react"
import memesData from "../../memesDAta"
import {saveAs} from "file-saver"
import { useRef } from "react"
export default function () {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "wanda.jpeg",
    })

    const [allMemeImages,setAllMemeImages] = React.useState(memesData)
    const memeContainerRef = useRef(null);

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
    
    const handleDownload = () => {
        const memeContainer = memeContainerRef.current;
    
        const canvas = document.createElement('canvas');
        canvas.width = memeContainer.offsetWidth;
        canvas.height = memeContainer.offsetHeight;
    
        const context = canvas.getContext('2d');
        const image = new Image();
        image.crossOrigin = 'anonymous'; // Enable CORS for the image
    
        image.onload = () => {
            // Draw the image onto the canvas
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
    
            // Set font properties including the Architects Daughter font
            context.font = 'bold 15px "impact", cursive'; // Adjust size as needed
            context.fillStyle = 'white'; // Adjust text color as needed
            context.textAlign = 'center';
    
            // Draw the top text in the center
            context.fillText(meme.topText, canvas.width / 2, 40);
    
            // Draw the bottom text in the center
            context.fillText(meme.bottomText, canvas.width / 2, canvas.height - 20);
    
            // Get the canvas data as a data URL
            const dataUrl = canvas.toDataURL('image/png');
    
            // Create a temporary link element
            const downloadLink = document.createElement('a');
            downloadLink.href = dataUrl;
            downloadLink.download = 'meme.png';
    
            // Append the link to the document and trigger a click event
            document.body.appendChild(downloadLink);
            downloadLink.click();
    
            // Remove the link from the document
            document.body.removeChild(downloadLink);
        };
    
        // Set the source of the image to the URL from your state
        image.src = meme.randomImage;
    };
    
    
    
    return(
        <main className=" p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ">
                <input 
                    type="text"
                    name="topText"
                    placeholder="Enter the top Text"
                    value={meme.topText}
                    className="form--input  border-4 border-black rounded-md p-2 w-full"
                    onChange={handleChange}
/>
                <input 
                    type="text"
                    name="bottomText"
                    placeholder="Enter the bottom Text"
                    value={meme.bottomText}
                    className="form--input  border-4 border-black rounded-md p-2  w-full"
                    onChange={handleChange}
                />
                <button className=" mt-2 grid-cols-1 border-2 border-black rounded-md py-2 bg-blue-950 text-white cursor-pointer w-full font-extrabold text-xl" onClick={getMemeImage}>Next Photo</button>
            </div>
            <div className="meme" ref={memeContainerRef}>
                <img src={meme.randomImage} className="meme--image" />
                <div className=" h-8 absolute bottom-0 right-0">
                    <p className="text-white text-center text-sm">@Fideltodayy</p>
                </div>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
            <button className="mt-2 grid-cols-1 border-2 border-black rounded-md py-2 bg-blue-950 text-white cursor-pointer w-full font-extrabold text-xl"onClick={handleDownload}>Save Image</button>

        </main>
    )
}