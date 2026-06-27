import { useState } from 'react';
import { Routes, Route} from 'react-router-dom';

import openBook from './assets/open-book.png';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ReviewsPage from './pages/ReviewsPage';
import WishlistPage from './pages/WishlistPage';
import SessionsPage from './pages/SessionsPage';
import JournalPage from './pages/JournalPage';


export default function App() {
    const [reviews, setReviews] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', review: 'A classic!', rating: 5 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', review: 'Powerful.', rating: 5 },
    { id: 3, title: '1984', author: 'George Orwell', review: 'Chilling and brilliant.', rating: 4 }
    ]);

    function addReview(newReview) {
        setReviews([{id: reviews.length + 1, ...newReview}, ...reviews]);
    }

    const [wishlist, setWishlist] = useState([
        { id: 1, title: 'I Who Have Never Known Men', author: 'Jacqueline Harpman' },
        { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' },
        { id: 3, title: 'The Song of Achilles', author: 'Madeline Miller' },
    ]);
    const [currentRead, setCurrentRead] = useState(null);

    function addToWishlist(book) {
        setWishlist([{id: wishlist.length + 1, ...book}, ...wishlist]);
    }

    function selectCurrentRead(book) {
        setCurrentRead(book);
    }

    function removeFromWishlist(bookId) {
        setWishlist(wishlist.filter(book => book.id !== bookId));
    }

    const [sessions, setSessions] = useState([]);

    function addSession(session) {
        setSessions([{id: sessions.length + 1, ...session}, ...sessions]);
    }

    const [journalEntries, setJournalEntries] = useState([]);

    function addJournalEntry(entry) {
        setJournalEntries([{ id: journalEntries.length + 1, ...entry}, ...journalEntries]);
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
                <Route path="/" element={
                    <Dashboard 
                    reviews={reviews} 
                    addReview={addReview}
                    wishlist={wishlist}
                    addToWishlist={addToWishlist}
                    currentRead={currentRead}
                    selectCurrentRead={selectCurrentRead}
                    removeFromWishlist={removeFromWishlist}
                    addSession={addSession}
                    sessions={sessions}
                    journalEntries={journalEntries}
                    addJournalEntry={addJournalEntry}
                    />}
                />
                <Route path="/reviews" element={
                    <ReviewsPage
                    reviews={reviews} 
                    />} 
                />
                <Route path="/wishlist" element={
                    <WishlistPage
                    wishlist={wishlist}
                    addToWishlist={addToWishlist}
                    selectCurrentRead={selectCurrentRead}
                    />}
                />
                <Route path="/sessions" element={
                    <SessionsPage
                    sessions={sessions}
                    addSession={addSession}
                    />
                }
                />
                <Route path='/journal' element={
                    <JournalPage
                    journalEntries={journalEntries}
                    addJournalEntry={addJournalEntry}
                    />
                }
                />
            </Routes>
        </>
    );
}