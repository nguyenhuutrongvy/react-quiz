import { Dispatch } from "react";
import { Action } from "./App";

function NextButton({
  answer,
  dispatch,
  index,
  numQuestions,
}: {
  answer: number;
  dispatch: Dispatch<Action>;
  index: number;
  numQuestions: number;
}) {
  if (answer === -1) {
    return null;
  }

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  } else if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
  }

  return null;
}
export default NextButton;
