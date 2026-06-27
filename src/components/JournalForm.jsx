import { useState } from "react";
import './JournalForm.css';

export default function JournalForm({ addJournalEntry, currentRead }) {
    const [formData, setFormData] = useState({
        book: currentRead ? currentRead.title : '',
        page: '',
        entry: '',
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.entry) return;
        addJournalEntry({
            ...formData,
            date: new Date().toLocaleDateString(),
        });
        setFormData({ book: currentRead ? currentRead.title : '', page: '', entry: '' });
    }

    return (
        <div className="journal-form">
            <h2>New Journal Entry</h2>
            <input
            className="journal-input"
            name="book"
            placeholder="Book title"
            value={formData.book}
            onChange={handleChange}
            />
            <br />
            <input
            className="journal-input"
            name="page"
            type="number"
            placeholder="Page number"
            value={formData.page}
            onChange={handleChange}
            />
            <br />
            <textarea
            className="journal-input"
            name="entry"
            placeholder="Write your thoughts..."
            value={formData.entry}
            onChange={handleChange}
            rows={5}
            />
            <br />
            <button className="journal-btn" onClick={handleSubmit}>+ Add Entry</button>
        </div>
    );
}