import { useState } from 'react';
import './ProgressBar.css';

export default function ProgressBar() {
  const [pagesRead, setPagesRead] = useState('');
  const [totalPages, setTotalPages] = useState('');

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
    </div>
  );
}