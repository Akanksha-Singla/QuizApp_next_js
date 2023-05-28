
import { useState, useEffect } from "react";

const Answer = ({ answerText, index, onSelectAnswer, currentAnswer, correctAnswer }) => {
  const letterMapping = ['A', 'B', 'C', 'D'];
  const [text, setText] = useState(null);

  useEffect(() => {
    setText(answerText);
  }, [answerText]);

  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
  const isDisabledClass = currentAnswer ? "disabled-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";

  

  return (
    <>
    <div className={`answer ${isDisabledClass} ${wrongAnswerClass} ${correctAnswerClass}`} onClick={() => {
      onSelectAnswer(answerText);
    }}>
      <div className="answer-letter">{letterMapping[index]}</div>
      <div className="answer-text">
        {typeof window !== "undefined" && text}
      </div>
       </div>
       
       </>
  );
};

export default Answer;


