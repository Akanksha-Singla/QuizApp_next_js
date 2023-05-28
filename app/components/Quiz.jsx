'use client'
import React from 'react'
import { useContext } from 'react'
import { QuizContext } from './MyProvider'
import Question from './Question'


const Quiz = () => {
const [quizState,dispatch] = useContext(QuizContext)
    console.log(quizState.currentAnswer)



  return ( 
    <div className='quiz'>
      {quizState.showResults && ( <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              Your score: {quizState.correctAnswersCount} 
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
        </div>)}
      {!quizState.showResults && (
        <div>
        <div className='score'>
        Question {quizState.currentQuestionIndex + 1 } / {quizState.questions.length}
      </div>
      <Question/>
      

        </div>
      )}
        </div>
  )
}

export default Quiz
