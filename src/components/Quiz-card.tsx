import React, { useState } from 'react';
import {questionPropType}from '../types/quiz-types'

const QuizCard:React.FC<questionPropType> =({question,option,callBack})=>{


    const [selectedAns , setSelectedAns] =useState("");
    

    const changeHandle =(ev:any)=>{
        setSelectedAns(ev.target.value)

    }
    return(
        <>
            <div className="question-container">
                <div className="question">
                    {question}
                </div>
            
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callBack(e,selectedAns)} className="form-container">
                {
                    option.map((opt:string,ind:number)=>{
                        
                        return(
                            
                            <div key={ind}>
                            <label className="radio">
                                <input type="radio"
                                name="opt"
                                value={opt}
                                onChange={changeHandle}
                                required
                                checked={selectedAns === opt}
                                />
                                {opt}
                            </label>
                            </div>
                        )
                    })
                }

                <input type="submit" className="submit"/>
               
            </form>
            </div>
                   

        </>
    )
}
export default QuizCard