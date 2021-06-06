import React from "react"

export type Quiz= {
    category:string
    correct_answer:string
    difficulty:string
    incorrect_answers:string[]
    question:string
    type:string
    option:string[]
    answer:string
}

export type questionType ={
    question:string
    answer:string
    option:string[],
    correct_answer:string
}

export type questionPropType ={
    question:string,
    option:string[],
    callBack:(e:React.FormEvent<EventTarget>,ans:string)=>void
}