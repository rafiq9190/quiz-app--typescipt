
import {questionType, Quiz} from '../types/quiz-types'


const shuffleArray = (array:any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export const  getQuizDetails= async(totalQuestion:number,level:string):Promise<Quiz[]>=> {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestion}&category=10&difficulty=${level}&type=multiple`);
    const {results} =await res.json();
    
    const data:Quiz[] = results.map((questionObj:Quiz,ind:number)=>{
     
        
        // const optionArray =[...questionObj.incorrect_answers,questionObj.correct_answer];
    
            return{

                 question:questionObj.question,
                 answer:questionObj.correct_answer,
                 correct_answer:questionObj.correct_answer,
                 option:shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
                

            }
    })
    return data;

}

