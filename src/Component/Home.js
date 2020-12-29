import React from 'react';
import image from '../1-background.jpg';
export default function Home(){
    return (
        <main>
            <img src={image}
            alt="backgroud-pic"
            className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-sung home-name">Hello My Name is Sujoy Dutta</h1>
            </section>
        </main>
    )
}