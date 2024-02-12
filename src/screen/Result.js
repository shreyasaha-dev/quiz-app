import { useContext, useEffect, useState } from "react";
import ResultOption from "../ResultOption";
import "../style/Result.css";
import {
  SelectedAnswerContext,
  QuestionDataContext,
  QuestionIdContext,
} from "../App";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const [score, setScore] = useState(0);
  const [questionId, setQuestionId] = useContext(QuestionIdContext);
  const [selectedAnswer, setSelectedAnswer] = useContext(SelectedAnswerContext);
  const questionData = useContext(QuestionDataContext);
  const navigate = useNavigate();
  useEffect(() => {
    let counter = 0;
    selectedAnswer.forEach((item, i) => {
      if (item === questionData[i].correctAnswer) {
        counter++;
      }
    });
    setScore(counter);
  }, []);
  const newGame = () => {
    navigate("/");
    setQuestionId(0);
    setSelectedAnswer([]);
  };
  return (
    <div className="total-result-section">
      <div className="result-mid-section">
        <h1>
          Final Result : <span>{score}</span>/{questionData.length}
        </h1>
        <div className="option-section">
          {selectedAnswer.map((item, i) => {
            return (
              <ResultOption
                key={i}
                answer={item}
                correctAnswer={questionData[i].correctAnswer}
              />
            );
          })}
        </div>
        <div className="result-bottom-section">
          <button onClick={newGame}>Play Another Game</button>
        </div>
      </div>
    </div>
  );
};
export default Result;
