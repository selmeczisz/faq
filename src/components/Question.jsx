import React from 'react'
import {questions} from '../data'
import { useState } from 'react'

export const Question = () => {
const [open, setOpen] = useState('')

/*const openInfo=()=>{
    questions.map((txt)=>{
        return <div key={txt.id}>{txt.info}</div>;
}*/

const getTitle=questions.map((txt)=>{
    return <div className='title' key={txt.id}>{txt.title} 
    <div ><i className="fa-solid fa-plus fa-2x" ></i></div></div>;
})


const getInfo=questions.map((txt)=>{
    return <div>{txt.info}</div>;
})
  return (
    <div>
        <div >{getTitle}</div>
        
    </div>

    

   
        
   
  )
}
