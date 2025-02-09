import { Dispatch, useEffect } from "react";
import { Action } from "./App";

function Timer({
  dispatch,
  secondsRemaining,
}: {
  dispatch: Dispatch<Action>;
  secondsRemaining: number;
}) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins >= 10 ? mins : `0${mins}`}:{seconds >= 10 ? seconds : `0${seconds}`}
    </div>
  );
}

export default Timer;
