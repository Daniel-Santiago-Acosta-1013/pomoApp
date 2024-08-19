import { useEffect } from 'react';
import { useTimer } from '../context/TimerContext';
import { useSettings } from '../context/SettingsContext';

export const useTimerHook = () => {
  const { time, isRunning, startTimer, pauseTimer, resetTimer, setTime } = useTimer();
  const { focusLength, shortBreakLength, longBreakLength } = useSettings();

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          clearInterval(interval);
          resetTimer();
        }
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time, setTime]);

  const setTimer = (mode: 'focus' | 'shortBreak' | 'longBreak') => {
    if (mode === 'focus') {
      setTime(focusLength * 60);
    } else if (mode === 'shortBreak') {
      setTime(shortBreakLength * 60);
    } else if (mode === 'longBreak') {
      setTime(longBreakLength * 60);
    }
    resetTimer();
  };

  return { time, isRunning, startTimer, pauseTimer, resetTimer, setTimer };
};
