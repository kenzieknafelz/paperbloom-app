import './ReadingSession.css';

export default function ReadingSession({sessions}) {
    return (
        <div className="sessions-container">
            <h2>Reading Sessions</h2>

            {sessions.length === 0 ? (
                <p>No sessions yet. Start the timer to log your first session!</p>
            ) : (
                <ul className="sessions-list">
                    {sessions.map(session => (
                        <li key={session.id} className="session-card">
                            <div className="session-info">
                                <p className="session-book">{session.book}</p>
                                <p className="session-date">{session.date}</p>
                            </div>
                            <p className="session-duration">{session.duration} min</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}