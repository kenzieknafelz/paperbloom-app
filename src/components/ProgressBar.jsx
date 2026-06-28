import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressBar.css';

export default function ProgressBar({currentRead, setCurrentRead, removeFromWishlist}) {
  const [pagesRead, setPagesRead] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const percentage = totalPages > 0
    ? Math.round((Math.min(pagesRead, totalPages) / totalPages) * 100)
    : 0;

  function handleComplete() {
    removeFromWishlist(currentRead.id);
    setCurrentRead(null);
    setPagesRead(0);
    setTotalPages(0);
    const leaveReview = window.confirm(
      `You finished ${currentRead.title}! Leave a review now!`
    );
    navigate('/reviews');
  }

  return (
    <div className="tracker">
        <h3 id="reading-progress">My Reading Progress: {percentage}%</h3>
        <div className="progress-container">
              <div
                className="progress-fill"
                style={{ width: `${percentage}%` }}
              />
            </div>
        <h4>Current Read:</h4>
        {currentRead ? (
          <>
            <p className='book-title'>{currentRead.title}</p>
            <p>{currentRead.author}</p>

            <label htmlFor="pages-read">Pages Read:</label>
            <input
              className="progress-input"
              id="pages-read"
              type="number"
              placeholder="Pages read"
              value={pagesRead}
              onChange={(e) => setPagesRead(Number(e.target.value))}
            />
            <br />
      
            <label htmlFor="total-pages">Total Pages:</label>
            <input
              className="progress-input"
              id="total-pages"
              type="number"
              placeholder="Total pages"
              value={totalPages}
              onChange={(e) => setTotalPages(Number(e.target.value))}
            />
            <button id="complete-btn" onClick={handleComplete}>
              Mark as Completed
            </button>
          </>
        ) : (
          <p>No current read selected. Pick one from your wishlist!</p>
        )}
    </div>
  );
}