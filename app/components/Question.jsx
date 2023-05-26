import { useContext } from 'react'
import { QuizContext } from './MyProvider'
import Answer from './Answer'



const Question = () => {
    const [quizState,dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
  return (
    <div>
        <div className='question'>
         { (currentQuestion.question)}
        </div>
        <div className='answers'>
            { quizState.answers.map((answer, index) => {
              return  <Answer answerText = {answer} key ={index} index={index} onSelectAnswer = {({answerText})=>{
                dispatch({type:"SELECT_ANSWER",payload: answerText}) 
              }} />
            })

            }
        </div>
    </div> 
  )
}

export default Question
 