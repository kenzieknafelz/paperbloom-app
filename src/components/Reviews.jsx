import './Reviews.css';

function Reviews({ reviews = [], limit }) {

  // if a limit prop is passed in, slice the array — otherwise show all
  const displayedReviews = limit ? reviews.slice(0, limit) : reviews;

  return (
    <div className="reviews-container">
      {displayedReviews.map(r => (
        <div key={r.id} className="review-card">
          <h3 className='rvw-title'>{r.title}</h3>
          <h4>Author: {r.author}</h4>
          <p>Rating: {r.rating}/5</p>
          <p>Review: {r.review}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;