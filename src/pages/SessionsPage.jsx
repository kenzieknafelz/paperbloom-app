import ReadingSession from '../components/ReadingSession';
import Timer from '../components/Timer';

export default function SessionsPage({ sessions }) {
  return (
    <>
    <h1>Reading Sessions</h1>
    <Timer />
    <div className="sessions-page">
      <ReadingSession sessions={sessions} />
    </div>
    </>
  );
}