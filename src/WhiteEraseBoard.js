import {useEffect, useState} from "react";

export default function WhiteEraseBoard() {
    var [running, setRunning] = useState(true);
    var [time, setTime] = useState(new Date());
    var [count, setCount] = useState(0);

    // a clock
    useEffect(() => {
        let timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    // a stopwatch
    useEffect(() => {
        if (running) {
            let stopWatchId = setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000);
            return () => {
                clearInterval(stopWatchId)
            };
        }
    }, [running]);

    function handleTemporaryClick() {
        setRunning(!running);
    }
    function handleResetClick() {
        setRunning(false);
        setCount(0);
    }

    return(<>
        <p>hey.</p>
        <p>am i running? {running.valueOf()}</p>
        <p>how long did i last? {count}</p>
        <p>what's the time? {time.toLocaleTimeString()}</p>
        <button type="button" onClick={handleTemporaryClick}>
            {running ? "Pause" : "Start"}
        </button>
        <button type="button" onClick={handleResetClick}>Stop</button>
    </>);
}