import ReadingSession from '../components/ReadingSession';
import Timer from '../components/Timer';

export default function SessionsPage({ sessions, addSession }) {
  return (
    <>
      <h1>Reading Sessions</h1>

      <Timer addSession={addSession} />

      <div className="sessions-page">
        <ReadingSession sessions={sessions} />
      </div>
    </>
  );
}