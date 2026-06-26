import { useState, useEffect, useRef, use } from 'react';
import './Timer.css';

export default function Timer({currentRead, addSession}) {
    const [selectedTime, setSelectedTime] = useState(10);
    const [timeLeft, setTimeLeft] = useState(10 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function handleSliderChange(e) {
        const newTime = Number(e.target.value);
        setSelectedTime(newTime);
        setTimeLeft(newTime * 60);
    }

    function start() {
        if (timeLeft === 0) return;
        setIsRunning(true);
    }

    function pause() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setTimeLeft(selectedTime * 60);
    }

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    useEffect(() => {
        if (timeLeft === 0 && !isRunning) {
            addSession({
                date: new Date().toLocaleDateString(),
                duration: selectedTime,
                book: currentRead ? currentRead.title : 'No book selected'
            });
        }
    }, [timeLeft]);


    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    return (
        <div className='timer'>
            <h3>Reading Timer</h3>

            <div className='time-selector'>
                {formatTime(timeLeft)}
                <br />
                <input
                    id='time-slider'
                    type='range'
                    min={10}
                    max={120}
                    step={5}
                    value={selectedTime}
                    onChange={handleSliderChange}
                    disabled={isRunning}
                />
                <br />
                <span>{selectedTime} min</span>
            </div>

            <div className='timer-controls'>
                {!isRunning ? (
                    <button className="timer-btn" onClick={start} disabled={timeLeft === 0}>Start</button>
                ) : (
                    <button className="timer-btn" onClick={pause}>Pause</button>
                )}
                <button className="timer-btn" onClick={reset}>Reset</button>
            </div>

            {timeLeft === 0 && (
                <p className='timer-complete'>Session complete!</p>
            )}
        </div>
    );
}