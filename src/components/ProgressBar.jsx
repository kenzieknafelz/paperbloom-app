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
      <input
        className="progress-input"
        type="number"
        placeholder="Pages read"
        value={pagesRead}
        onChange={(e) => setPagesRead(Number(e.target.value))}
      />
      <input
        className="progress-input"
        type="number"
        placeholder="Total pages"
        value={totalPages}
        onChange={(e) => setTotalPages(Number(e.target.value))}
      />
    </div>
  );
}