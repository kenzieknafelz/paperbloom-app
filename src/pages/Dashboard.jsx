import './Dashboard.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ProgressBar from '../components/ProgressBar';
import Reviews from '../components/Reviews';
import Wishlist from '../components/Wishlist';

export default function Dashboard({
  reviews, 
  addReview, 
  wishlist, 
  addToWishlist, 
  currentRead, 
  selectCurrentRead, 
  removeFromWishlist,
  addSession,
  sessions,
  journalEntries,
  addJournalEntry,
  }) {

    const navigate = useNavigate();

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-layout">
        
        <div className='reading-session'>
          <h2>Latest Reading Session</h2>
          {sessions.length === 0 ? (
            <p>No sessions yet. Start the timer to log your first session!</p>
          ): (
            <div className='session-card'>
              <p className='session-book'>{sessions[0].book}</p>
              <p className='session-date'>{sessions[0].date}</p>
              <p className='session-duration'>{sessions[0].duration} min</p>
            </div>
          )}
          <button
            className='new-session-btn'
            onClick={() => navigate('/sessions')}
            >
              Start a New Session
            </button>
        </div>
       
        <ProgressBar 
        currentRead={currentRead}
        setCurrentRead={selectCurrentRead}
        removeFromWishlist={removeFromWishlist}
        />

        <div className='latest-entry'>
          <h2>Latest Journal Entry</h2>

          {journalEntries.length === 0 ? (
            <p>No entries yet. Start journaling your reading journey!</p>
          ) : (
            <div className='journal-card'>
              <div className='journal-card-header'>
                <p className='journal-book'>{journalEntries[0].book}</p>
                <p className='journal-date'>{journalEntries[0].date}</p>
              </div>
            {journalEntries[0].page && (
              <p className='journal-page'>Page {journalEntries[0].page}</p>
            )}
              <p className='journal-entry'>{journalEntries[0].entry}</p>
            </div>
          )}
          <button
          className='new-entry-btn'
          onClick={() => navigate('/journal')}
          >
            + New Journal Entry
          </button>
          </div>
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