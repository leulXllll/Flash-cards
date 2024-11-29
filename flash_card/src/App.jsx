import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {

  const [notes ,setNotes] = useState("Hello there this is some note");

  const [answerFlipped , setAnswerFlipper] = useState(true);

  const flipCard = ()=>{
    
    if(answerFlipped){
      setNotes('some answer')
      setAnswerFlipper(false);
    }else{
      setNotes('some thing here ');
      setAnswerFlipper(true);
    }
  }
  return (
    <>
     
       <Card notes={notes} flip={flipCard}/>
    </>
  )
}

export default App
