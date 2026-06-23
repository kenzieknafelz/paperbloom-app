import Reviews from '../components/Reviews';
import ReviewForm from '../components/ReviewForm';

function ReviewsPage({reviews}) {
  return (
    <div>
      <h1>All Reviews</h1>
      <ReviewForm />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default ReviewsPage;