import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';

function ReviewsPage({reviews, addReview}) {
  return (
    <div>
      <h1>All Reviews</h1>
      <ReviewForm addReview={addReview}/>
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsPage;