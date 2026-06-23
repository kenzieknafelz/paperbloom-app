import React from 'react';
import openBook from './assets/open-book.png';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import { useState } from 'react';



export default function App() {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <header>
                <img src={openBook} alt="open book" className="logo" />
                <h1>Paperbloom</h1>
                <img src={openBook} alt="open book" className="logo" />
            </header>
            <p id="tagline">Cultivate the garden of your mind.</p>
            <Navbar />
            <ProgressBar progress={progress} />
        </>
    );
}