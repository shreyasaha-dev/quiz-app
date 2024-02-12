import "./style/ResultOption.css";

const ResultOption = ({ answer, correctAnswer }) => {
  return (
    <div
      className={
        answer === correctAnswer
          ? "result-option green-background"
          : "result-option red-background"
      }
    >
      <p>{answer}</p>
    </div>
  );
};
export default ResultOption;
