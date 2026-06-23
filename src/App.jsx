import React, { use } from 'react';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';

import openBook from './assets/open-book.png';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ReviewsPage from './pages/ReviewsPage';



export default function App() {
    const [reviews, setReviews] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', review: 'A classic!', rating: 5 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', review: 'Powerful.', rating: 5 },
    { id: 3, title: '1984', author: 'George Orwell', review: 'Chilling and brilliant.', rating: 4 },
    { id: 4, title: 'Dune', author: 'Frank Herbert', review: 'Epic world building.', rating: 5 },
    { id: 5, title: 'The Hobbit', author: 'J. R. R. Tolkien', review: 'Charming adventure.', rating: 4 },
    ]);

    function addReview(newReview) {
        setReviews([...reviews, {id: reviews.length + 1, ...newReview}]);
    }
    return (
        <>
            <header>
                <img src={openBook} alt="open book" className="logo" />
                <h1>Paperbloom</h1>
                <img src={openBook} alt="open book" className="logo" />
            </header>
            <p id="tagline">Cultivate the garden of your mind.</p>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard reviews={reviews} addReview={addReview} />} />
                <Route path="/reviews" element={<ReviewsPage reviews={reviews} />} />
            </Routes>
        </>
    );
}