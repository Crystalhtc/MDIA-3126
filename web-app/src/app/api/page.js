"use client"; // this is a client-side file, need this for the fetch api to work
import { useState } from 'react';

export default function Home() {
    //x button to click to call api
    // function that calls the api
    //x somewhere to output the data i get back
    // iterator to work through the data and format it
    //x display an empty and fulfilled state
    //x create a state to contain my data

    const [products, setProducts] = useState(null); // null is safer than an empty string
    const API_URL = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'

    async function fetchProducts() {
        const response = await fetch(API_URL); 
        // console.log(response); // response is a promise, would be a object(?)
        const data  = await response.json(); // make response into a json object
        // console.log(data);
        setProducts(data); 
    }
    // await is a keyword that can only be used inside an async function
    // await: tells the function to wait for the promise to resolve before continuing, say dont panic until data is gotten

    const ProductOutput = () => {
        if (products) {

            let productsList = [];

            products.forEach((product, index) => {
                productsList.push(
                    <li key={index}>
                        {product.name}
                    </li>
                )
            })

            return (
                <div className="p-4 mb-4 border-4 border-black text-center">
                    <ul>{productsList}</ul>
                </div>
            )
        }

        return (
            <div className="mb-4 border-4 border-black text-center">
                🌭🌭🌭🌭 NO 🌭🌭🌭 PRODUCTS 🌭🌭🌭🌭 YET 🌭🌭🌭🌭
            </div>
        ) 
    }

    return (
        <div className="p-4 bg-yellow-300">
            Welcome to my API page!
            <header className="p-4 mb-4 border-4 border-black">
                <h1 className="text-4xl mb-4">Welcome to my product page</h1>
                <button
                    className="p-4 bg-black text-yellow-300"
                    onClick={fetchProducts}
                >
                    🌭Fetch products!
                </button>
            </header>
            <ProductOutput />
        </div>
    );
}
