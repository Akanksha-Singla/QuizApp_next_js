// import { useContext } from 'react'
// import { QuizContext } from './MyProvider'
// import Answer from './Answer'



// const Question = () => {
//     const [quizState,dispatch] = useContext(QuizContext)
//     const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
//   return (
//     <div>
//         <div className='question'>
//          { (currentQuestion.question)}
//         </div>
//         <div className='answers'>
//             { quizState.answers.map((answer, index) => {
//               return  <Answer answerText = {answer} 
//               key ={index} 
//               index={index} 
//               onSelectAnswer={(answerText) => {
//                 console.log("selected answer", answerText);
//                 dispatch({ type: "SELECT_ANSWER", payload: answerText });
//               }}
//                 />
//             })

//             }
//         </div>
//     </div> 
//   )
// }

// export default Question

import { useContext } from 'react'
import { QuizContext } from './MyProvider'
import Answer from './Answer'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

  const handleNextButton = ()=>{
    // if (currentQuestionIndex < quizState.questions.length - 1) 

    dispatch({type: 'NEXT_QUESTION'})
    
   } 
   
   const handlePreviousButton = (e) =>
//    {if(quizState.currentQuestionIndex > 0)
{
    {
     dispatch({type: 'PREVIOUS_QUESTION'}) 
    }} 
   const handleSubmitButton =()=>{}
   const isdisableNext = quizState.currentAnswer ? 'next-button' : "disabled-button";
   const isdisablePrevious = quizState.currentQuestionIndex > 0 ? 'next-button' : "disabled-button";

  return (
    <div>
      <div className='question'>
        {currentQuestion.question}
      </div>
      <div className='answers'>
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer ={quizState.currentAnswer}
            correctAnswer ={currentQuestion.correct_answer}
            onSelectAnswer={(answerText) => {
              console.log("selected answer", answerText);
              dispatch({ type: "SELECT_ANSWER", payload: answerText });
            }}
/>
        ))}
      </div>
      <div className="button-group">

{/* <div className={`${isdisablePrevious} "next-button"`} onClick={()=>handlePreviousButton()}>Previous</div> */}
<div className={`${isdisableNext} "next-button"`}  onClick={()=> handleNextButton() }>Next </div>
</div>

    </div>
  )
}

export default Question

 