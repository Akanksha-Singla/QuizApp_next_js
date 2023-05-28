'use client'
 import { useReducer,useState,useContext,createContext, useEffect } from "react";
 import questions from './Data';
 import { shuffleAnswers } from "./helper";
  
 export  const QuizContext = createContext()

const initialState = {questions,
currentQuestionIndex:0,
showResults:false,
correctAnswersCount: 0,
answers:shuffleAnswers(questions[0]),
currentAnswer:""
}
   

   
const reducer = (state,action) =>{
   console.log("reducder", state, action)
 switch (action.type) {
case "SELECT_ANSWER":{
   const correctAnswersCount = action.payload === 
   state.questions[state.currentQuestionIndex].correct_answer
    ? state.correctAnswersCount + 5
    : state.correctAnswersCount - 1 ;
    return{
      ... state,
      currentAnswer : action.payload,
      correctAnswersCount,

    }

}   
case "NEXT_QUESTION":{
   const showResults =
   state.currentQuestionIndex === state.questions.length - 1;
 const currentQuestionIndex = showResults
   ? state.currentQuestionIndex
   : state.currentQuestionIndex + 1;
   const answers = showResults
   ? []
   : shuffleAnswers(state.questions[currentQuestionIndex]);
 return{
         ...state,
         currentAnswer: "",
         currentQuestionIndex,
         showResults,
         answers,
   }  
   }
  case "PREVIOUS_QUESTION":{
   const currentQuestionIndex = state.currentQuestionIndex - 1; 
   
   return{
      ...state,
      currentQuestionIndex
   } 
  } 
   case "RESTART": {
      return initialState;
    }
      
   default:
      break;
 }

return state;
}
 
 const MyProvider = ({ children }) =>{
    const value = useReducer(reducer,initialState)
   return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
   
}

 export   default  MyProvider
