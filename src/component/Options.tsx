import { Dispatch } from "react";
import { QuestionType } from "../QuestionsData";
import { Action } from "./App";

function Options({
  question,
  dispatch,
  answer,
}: {
  question: QuestionType;
  dispatch: Dispatch<Action>;
  answer: number;
}) {
  const hasAnswered = answer !== -1;

  return (
    <div className="options">
      {question?.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => {
            if (!hasAnswered) {
              dispatch({ type: "newAnswer", payload: index });
            }
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
