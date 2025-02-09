import { Dispatch } from "react";
import { QuestionType } from "../QuestionsData";
import { Action } from "./App";
import Options from "./Options";

function Question({
  question,
  dispatch,
  answer,
}: {
  question: QuestionType;
  dispatch: Dispatch<Action>;
  answer: number;
}) {
  return (
    <div>
      <h4>{question?.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
