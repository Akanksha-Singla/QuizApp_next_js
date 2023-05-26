'use client'
 import { useReducer,useState,useContext,createContext } from "react";
 import questions from './Data';
 import { shuffleAnswers } from "./helper";
  
 export  const QuizContext = createContext()
 
const initialState = {questions,
currentQuestionIndex:0,
showResults:false,
correctAnswersCount: 0,
answers:shuffleAnswers(questions[0])

}
   

   
const reducer = (state,action) =>{
   console.log("reducder", state, action)
 switch (action.type) {
case "NEXT_QUESTION":{
   const showResults =
   state.currentQuestionIndex === state.questions.length - 1;
 const currentQuestionIndex = showResults
   ? state.currentQuestionIndex
   : state.currentQuestionIndex + 1;
 return{
         ...state,
         currentQuestionIndex,
         showResults
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
