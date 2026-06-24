import './Dashboard.css';
import { useState } from 'react';

import ProgressBar from '../components/ProgressBar';
import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';
import Wishlist from '../components/Wishlist';

function Dashboard({reviews, addReview, wishlist, addToWishlist, currentRead, selectCurrentRead}) {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-layout">
        <ProgressBar currentRead={currentRead} />
        <ReviewForm addReview={addReview}/>
      </div>
      <div className="dashboard-layout">
        <Wishlist
        wishlist={wishlist}
        addToWishlist={addToWishlist}
        selectCurrentRead={selectCurrentRead}
        limit={3}
        />
        <Reviews reviews={reviews} limit={3} />
        </div>
    </>
  );
}

export default Dashboard;