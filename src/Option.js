import "./style/Option.css";
import { useContext } from "react";
import {
  SelectedIdContext,
  SelectedAnswerContext,
  QuestionIdContext,
} from "./App";
const Option = ({ answer, index, handleChange }) => {
  const [selectedId, setSelectedId] = useContext(SelectedIdContext);
  const [selectedAnswer, setSelectedAnswer] = useContext(SelectedAnswerContext);
  const [questionId, setQuestionId] = useContext(QuestionIdContext);
  return (
    <div
      className={
        selectedId === answer ||
        (selectedId === "" && selectedAnswer[questionId] === answer)
          ? "selected-option total-option"
          : "total-option"
      }
    >
      <input
        type="radio"
        onChange={handleChange}
        checked={
          selectedId === answer ||
          (selectedId === "" && selectedAnswer[questionId] === answer)
        }
      />
      <p>{answer}</p>
    </div>
  );
};
export default Option;
