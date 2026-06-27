import JournalEntries from "../components/JournalEntries";
import JournalForm from "../components/JournalForm";

export default function JournalPage({ addJournalEntry, journalEntries }) {
    return (
        <div className="journal-page">
            <h1>My Journal</h1>
            <JournalForm addJournalEntry={addJournalEntry} />
            <JournalEntries journalEntries={journalEntries} />
        </div>
    );
}