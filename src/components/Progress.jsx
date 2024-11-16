import { useEffect, useState } from "react";
import consoleLog from "../consoleLog";

export default function ({ timer }) {
    const [remainingTime, setRemainingTime] = useState(TIMER);
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevValue) => prevValue - 10);
        }, 10)
        return () => {
            consoleLog('cleaning out the interval timer', 'DeleteConfirmation');
            clearInterval(interval)
        };
    }, []);
    return <progress value={remainingTime} max={timer} min="0" />

}