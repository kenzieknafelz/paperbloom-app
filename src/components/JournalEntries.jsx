import './JournalEntries.css';

export default function JournalEntries({ journalEntries, limit }) {
    const displayedEntries = limit ? journalEntries.slice(0, limit) : journalEntries;

    const grouped = displayedEntries.reduce((acc, entry) => {
        if (!acc[entry.book]) {
            acc[entry.book] = [];
        }
        acc[entry.book].push(entry);
        return acc;
    }, {});

    return (
        <div className="journal-entries">
            <h2>Journal Entries</h2>

            {displayedEntries.length === 0 ? (
                <p>No entries yet. Start journaling your reading journey!</p>
            ) : (
                Object.keys(grouped).map(book => (
                    <div key={book} className="book-group">
                        <h3 className="group-title">{book}</h3>
                        {grouped[book].map(entry => (
                            <div key={entry.id} className="journal-card">
                                <div className="journal-header">
                                    <span className="journal-date">{entry.date} - </span>
                                    {entry.page && (
                                        <span className="journal-page">Page {entry.page}</span>
                                    )}
                                </div>
                                <p className="journal-entry">{entry.entry}</p>
                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
}