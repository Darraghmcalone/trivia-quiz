import { useState, useEffect } from 'react'

const useTimer = () => {
    const [seconds, setSeconds] = useState<number>(10);
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds - 1)
        }, 1000)
        if (!isTimerActive && seconds !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer)
    });
    return {
        isTimerActive,
        seconds,
        setSeconds,
        startTimer: () => setIsTimerActive(true),
        stopTimer: () => setIsTimerActive(false)
    }
}
export default useTimer