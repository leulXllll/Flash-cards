import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'
import ProgressBar from './ProgressBar';

function App() {
  
  let tempNotes = [
    {id:0, questionBool:true, 
    answer:"React is a JavaScript library for building user interfaces, primarily for single-page applications where you can create reusable UI components.",
    question:"What is React?"},

    {id:1, questionBool:true, answer:"JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to XML or HTML. It's used in React to describe what the UI should look like.",question:"What is JSX in React?"},

    {id:2, questionBool:true, answer:"The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to optimize updates by comparing the current state of the Virtual DOM with a previous snapshot and updating only the changed parts.",
      question:"What is the Virtual DOM? "},
    {id:3, questionBool:true , question:'What is a React component?',answer:' A reusable UI element in React that can be a function or class.'},
    {id:4, questionBool:true , question:'What is the useEffect hook in React?',
      answer:'Performs side effects in functional components, like data fetching or DOM updates.'},
    {id:5, questionBool:true , question:'What are controlled components in React?',
      answer:'Form elements whose values are controlled by React state.'},
    {id:6, questionBool:true , question:' What are uncontrolled components in React?',
      answer:'Form elements that manage their own state, accessed via refs.'},

    {id:7, questionBool:true , question:'What is the purpose of key prop in React lists?',
      answer:' Helps React identify and optimize changes to list items.'},

    {id:8, questionBool:true , question:'What is React Router?',
      answer:'A library for managing navigation in single-page React applications.'},
    {id:9, questionBool:true , question:'What is the useContext hook?',
      answer:' Provides a way to share values between components without passing props manually.'},
    {id:10, questionBool:true , question:'What is the useRef hook in React?',answer:' Provides a way to persist values or reference DOM elements without causing re-renders.'},
    {id:11, questionBool:true , question:'What is Redux in React?',answer:'A state management library for managing global state in React apps.'}
  ];

   
  const [notes ,setNotes] = useState(null);
  
  const [completed,setCompleted] = useState(0);

  const [button_prev ,setprevButton] = useState(false);
  
  const [button_next ,setnxtButton] = useState(false);

  const flipCard = ()=>{
   
    setNotes((notes)=>({
        ...notes,questionBool:!notes.questionBool
    }));
  }

  const handleNext = (id)=>{

    let index = tempNotes.findIndex(note=>{return note.id==id});
    
    if(index==tempNotes.length-2){
         setnxtButton(true);
        }
        setprevButton(false);
      setNotes(tempNotes[index+1]);
      setCompleted(completed+1);
    }
    
    const handlePrevious = (id) =>{

      let index = tempNotes.findIndex(note=>{return note.id==id});
      
      if(index==1){
        setprevButton(true);
      }
          setnxtButton(false);
          setNotes(tempNotes[index-1]);
          setCompleted(completed-1);

    }
  useEffect(()=>{

      setNotes(tempNotes[0]);
      setprevButton(true);

  },[]);
  return (
    <>
    <ProgressBar completed={completed}/>
      {notes &&
     <Card notes={notes}
      flip={flipCard} next={handleNext} 
      prev={handlePrevious} 
      btn_prv={button_prev}
      btn_nxt={button_next}
      />
      }
    </>
  )
}

export default App
