import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./screen/Quiz";
import Result from "./screen/Result";
import { createContext, useState } from "react";
const QuestionIdContext = createContext();
const QuestionDataContext = createContext();
const SelectedIdContext = createContext();
const SelectedAnswerContext = createContext();
const App = () => {
  const [questionId, setQuestionId] = useState(0);
  const [selectedId, setSelectedId] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const questionData = [
    {
      id: 0,
      question: "What is the largest planet in our solar system?",
      answers: ["earth", "venus", "jupitar", "saturn"],
      correctAnswer: "jupitar",
    },
    {
      id: 1,
      question: "Which is the fastest animal?",
      answers: ["horse", "tiger", "lion", "dog"],
      correctAnswer: "horse",
    },
    {
      id: 2,
      question: "Which planet is nearest to sun?",
      answers: ["venus", "neptune", "mercury", "jupitar"],
      correctAnswer: "mercury",
    },
    {
      id: 3,
      question: "What is smallest bird?",
      answers: ["crow", "parrot", "haming", "sparrow"],
      correctAnswer: "haming",
    },
    {
      id: 4,
      question: "What is biggest bird?",
      answers: ["crow", "ostrich", "haming", "sparrow"],
      correctAnswer: "ostrich",
    },
    {
      id: 5,
      question: "What is our national bird?",
      answers: ["crow", "parrot", "haming", "peacock"],
      correctAnswer: "peacock",
    },
    {
      id: 6,
      question: "What is our national animal?",
      answers: ["lion", "bear", "tiger", "goat"],
      correctAnswer: "tiger",
    },
    {
      id: 7,
      question: "What is our national fruit?",
      answers: ["mango", "lichi", "apple", "grape"],
      correctAnswer: "mango",
    },
    {
      id: 8,
      question: "What is our national flower?",
      answers: ["lilly", "lotus", "rose", "marigold"],
      correctAnswer: "lotus",
    },
    {
      id: 9,
      question: "how many bones are there in a human body?",
      answers: ["206", "207", "205", "202"],
      correctAnswer: "206",
    },
  ];
  return (
    <QuestionDataContext.Provider value={questionData}>
      <SelectedIdContext.Provider value={[selectedId, setSelectedId]}>
        <SelectedAnswerContext.Provider
          value={[selectedAnswer, setSelectedAnswer]}
        >
          <QuestionIdContext.Provider value={[questionId, setQuestionId]}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
              </Routes>
            </BrowserRouter>
          </QuestionIdContext.Provider>
        </SelectedAnswerContext.Provider>
      </SelectedIdContext.Provider>
    </QuestionDataContext.Provider>
  );
};
export default App;
export {
  QuestionDataContext,
  SelectedIdContext,
  SelectedAnswerContext,
  QuestionIdContext,
};
