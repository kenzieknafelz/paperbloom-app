import './Wishlist.css';
import { useState } from "react";

export default function Wishlist({wishlist, addToWishlist, selectCurrentRead, limit}) {
    const displayedWishlist = limit ? wishlist.slice(0, limit) : wishlist;
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    function handleAdd() {
        if (!title) return;
        addToWishlist({title, author});
        setTitle('');
        setAuthor('');
    }

    return (
        <div className="wishlist-container">
            <h2>Book Wishlist</h2>
            <p>Plant the seed of a new read!</p>

            <div>
            <input
                className="wishlist-input"
                placeholder="Book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="wishlist-input"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <br />
            <button id="wishlist-btn" onClick={handleAdd}>+ Add Book</button>
            </div>

            <ul className="wishlist-list">
                {displayedWishlist.map(book => (
                    <li key={book.id} className="wishlist-item">
                        <div>
                            <p className="book-title">{book.title}</p>
                            <p className="book-author">{book.author}</p>
                        </div>
                        <button id="current-btn" onClick={() => selectCurrentRead(book)}>
                            Mark as Current Read
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}