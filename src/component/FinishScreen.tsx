import { Dispatch } from "react";
import { Action } from "./App";

function FinishScreen({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}: {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: Dispatch<Action>;
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) {
    emoji = "🏅";
  }
  if (percentage < 100 && percentage >= 80) {
    emoji = "🎉";
  }
  if (percentage < 80 && percentage >= 50) {
    emoji = "🫠";
  }
  if (percentage < 50 && percentage > 0) {
    emoji = "🤨";
  }
  if (percentage === 0) {
    emoji = "🤦‍♂️";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
