"use client"

import React, { useState } from 'react';
import {Cherry_Swash} from "next/font/google"; 
import { createClient } from '@/utils/supabase/client';
import { create } from 'domain';

const font= Cherry_Swash({
    weight:"700",
    style: "normal",
    subsets: ["latin"]
});

export default function CreateMemory({user}) {
    const supabase = createClient();
    const [loading, setLoading] = useState(null);
    const [file,setFile] = useState(null);
    const[description,setDescription] = useState(null);

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);
    }

    async function createMemory({description}) {
        try {
            setLoading(true);
            const imageUrl = await getImageUrl();
            const memory = {
                user_id: user?.id,
                description: description,
                image_url: imageUrl,
            }
            let {error} = await supabase.from("memories").insert(memory);
            if(error) {
                throw error;
            };
        } catch (error) {
            alert("Error creating memory");
        } finally {
            setLoading(false);
        }
    }

    const getImageUrl = async () => {
        try{
            if(!file) {
                alert("Please pick an image");
                return;
            }
            const fileExtension = file.name.split(".").pop();
            const fileName = `${Math.random()}.${fileExtension}`;

            const { data, error } = await supabase.storage
                .from('memory-images')
                .upload(fileName, file);

                if(error) {
                    throw error;
                }

                const {data:url} = await supabase.storage
                .from("memory-images")
                .getPublicUrl(fileName);

                // alert("Image upload successful")
                console.log(url.publicUrl);
                return url.publicUrl;

        } catch (error){
            alert("There was an error uploading the file!");
            console.log(error.message);
        }
    }

    return (
        <form name="memory"
            className="border-4 border-yellow-100 p-4 mb-4"
        >
            <h1 className={`text-3xl mb-6 text-yellow-100 text-center ${font.className}`}>
                Zum Andeken fur Hanne 
            </h1>
            <fieldset className="flex flex-col mb-2">
                <label className={font.className} htmlFor="image">
                    Image
                </label>
                <input
                    className="border border-yellow-100 p-2"
                    id="image"
                    name="image"
                    type="file"
                    onChange={handleFileChange}
                />
            </fieldset>
            <fieldset className="flex flex-col mb-2">
                <label className={font.className} htmlFor="description">
                    Description
                </label>
                <textarea 
                    className="border border-yellow-100 p-2 text-black"
                    id="description"
                    name="description"
                    onChange={handleDescriptionChange}
                />
            </fieldset>
            <fieldset>
                <button 
                    type="button"
                    className="border-4 border-yellow-100 p-4 mb-4 w-full"
                    onClick={() => createMemory({description})}
                    disabled={loading}
                >
                    {loading ? 'Creating...' : 'Create'}
                </button>
            </fieldset>
        </form>
    )
}

