import './ReviewForm.css';
import { useState } from 'react';


export default function ReviewForm({addReview}) {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        review: '',
        rating: '',
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        addReview(formData);
        setFormData({ title: '', author: '', review: '', rating: ''});
    }
    return (
        <div id="rvw-form">
            <h2>New Review</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    name="title"
                    type="text"
                    placeholder="Book title" 
                    className="rvw-input" 
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="author">Author:</label>
                <input 
                    name="author" 
                    type="text" 
                    placeholder="Author"
                    className="rvw-input" 
                    id="author" 
                    value={formData.author}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="rating">Rating:</label>
                <input
                    name="rating"
                    type="number"
                    placeholder="0"
                    className="rvw-input"
                    min="1"
                    max="5"
                    value={formData.rating}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="review">Review:</label><br />
                <textarea
                    id="review" 
                    name="review"
                    className="rvw-input" 
                    rows="4" 
                    cols="40" 
                    placeholder="Write your review here!"
                    value={formData.review}
                    onChange={handleChange}
                />
                <br />

                <button id="rvw-btn" type="submit">+ Add Review</button>
            </form>
        </div>
    )
}