import './Dashboard.css';
import { useState } from 'react';

import ProgressBar from '../components/ProgressBar';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';

function Dashboard({reviews, addReview}) {
    const [progress, setProgress] = useState(0);

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-layout">
      <ProgressBar progress={progress} />
      <ReviewForm addReview={addReview} />
      </div>
      <Reviews reviews={reviews} limit={3} />  {/* only shows 3 reviews + button */}
    </>
  );
}

export default Dashboard;