import React, { useEffect,useState } from 'react';
import{getQuizDetails} from './services/quiz-service';
import './App.css';
import {questionType,Quiz} from './types/quiz-types';
import QuizCard from "./components/Quiz-card"


function App() {

const [quiz ,setQuiz]= useState <Quiz[]>([]);
const [currentStep ,setCurrentStep]=useState(0);
const [score ,setScore] =useState(0)

  useEffect(()=>{
    async function fetchData(){
      const quizs:Quiz[] = await getQuizDetails(5,'easy');
      console.log(quizs)
      setQuiz(quizs)
    }
    fetchData();
  

  },[]);

  const handleSubmit=(e:React.FormEvent<EventTarget>, userAns:string)=>{

    let currentQuesiton = quiz[currentStep];
    console.log('correctAns:'+currentQuesiton.correct_answer +"user selection"+userAns)
    if(userAns === currentQuesiton.correct_answer){
        setScore(score+1)
    }

    e.preventDefault();

    console.log(userAns)
    if(currentStep !== quiz.length-1){

      setCurrentStep(currentStep+1);
      }else{
      alert( `you score is ${score} out of ${quiz.length}`)
      setCurrentStep(0)
      setScore(0)
    }
  }

  if(!quiz.length)
  return<h3>Loading...</h3>

  return (
    <div className="App">
      <QuizCard
      option={quiz[currentStep].option}
      question={quiz[currentStep].question}
      callBack={handleSubmit}
      />
    </div>
  );
}

export default App;
