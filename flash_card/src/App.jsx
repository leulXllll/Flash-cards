import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  
  let tempNotes = [
    {id:1, questionBool:true, answer:"the truth",question:"whats sth that doesnt have a shadow"},

    {id:2, questionBool:true, answer:"lies",question:"why do people kill a"},

    {id:3, questionBool:true, answer:"magic",question:"how are you doing "},
  ];

   
  const [notes ,setNotes] = useState(null);
  
  const [answer ,setAnswer] = useState(null);


  const flipCard = ()=>{
   
    setNotes((notes)=>({
        ...notes,questionBool:!notes.questionBool
    }));
  }

  const handleNext = (id)=>{

    let index = tempNotes.findIndex(note=>{return note.id==id});

     let nextNote = tempNotes[index+1];

       console.log('next note is ',nextNote);

        setNotes(nextNote);
    }
    
    const handlePrevious = () =>{
      setNotes(tempNotes[1].question)
      setAnswerFlipper(false);
  }
  useEffect(()=>{

      setNotes(tempNotes[0])

  },[]);
  return (
    <>
      {notes &&
     <Card notes={notes} answer={answer} flip={flipCard} next={handleNext} prev={handlePrevious} />
      }
    </>
  )
}

export default App
