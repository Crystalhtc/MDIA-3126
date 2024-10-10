"use client"; // this is a client-side file, need this for the fetch api to work
import { useState } from 'react';

export default function Home() {

    const [media, setMedia] = useState(null); // null is safer than an empty string
    const API_URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5'

    async function fetchMedia() {
        const response = await fetch(API_URL); 
        // console.log(response); // response is a promise, would be a object(?)
        const data  = await response.json(); // make response into a json object
        // console.log(data);
        setMedia(data); 
    }
    // await is a keyword that can only be used inside an async function
    // await: tells the function to wait for the promise to resolve before continuing, say dont panic until data is gotten

    const MediaOutput = () => {
        if (media) {

            let mediaList = [];

            media.forEach((mediaItem, index) => {
                mediaList.push(
                    <li key={index}>
                        <h2 className="text-xl">{mediaItem.title}</h2>
                        <img src={mediaItem.url} alt={mediaItem.explanation}/>
                        <p>{mediaItem.explanation}</p>
                    </li>
                )
            })

            return (
                <div className="p-4 mb-4 border-4 border-black text-center">
                    <ul>{mediaList}</ul>
                </div>
            )
        }

        return (
            <div className="mb-4 border-4 border-black text-center">
                 NO MEDIA YET
            </div>
        ) 
    }

    return (
        <div className="p-4 bg-yellow-300">
            Welcome to my API page!
            <header className="p-4 mb-4 border-4 border-black">
                <h1 className="text-4xl mb-4">Welcome to my media page</h1>
                <button
                    className="p-4 bg-black text-yellow-300"
                    onClick={fetchMedia}
                >
                    Fetch media!
                </button>
            </header>
            <MediaOutput />
        </div>
    );
}
