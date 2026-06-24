import { useState } from 'react';
import './ProgressBar.css';

export default function ProgressBar({currentRead}) {
  const [pagesRead, setPagesRead] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const percentage = totalPages > 0
    ? Math.round((Math.min(pagesRead, totalPages) / totalPages) * 100)
    : 0;

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
            <h4>{currentRead.title}</h4>
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
          </>
        ) : (
          <p>No current read selected. Pick one from your wishlist!</p>
        )}
    </div>
  );
}