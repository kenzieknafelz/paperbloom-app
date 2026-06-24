import Wishlist from '../components/Wishlist';

export default function WishlistPage({ wishlist, addToWishlist, selectCurrentRead }) {
  return (
    <div>
      <h1>My Wishlist</h1>
      <Wishlist
        wishlist={wishlist}
        addToWishlist={addToWishlist}
        selectCurrentRead={selectCurrentRead}
      />
    </div>
  );
}