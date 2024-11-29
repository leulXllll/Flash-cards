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
  
  const [button_Enable ,setButton] = useState(false);


  const flipCard = ()=>{
   
    setNotes((notes)=>({
        ...notes,questionBool:!notes.questionBool
    }));
  }

  const handleNext = (id)=>{

    let index = tempNotes.findIndex(note=>{return note.id==id});

      if(index==tempNotes.length-1){
        console.log('button is on ');
         setButton(true);
      }else{

        let nextNote = tempNotes[index+1];
        
        
        setNotes(nextNote);
      }
    }
    
    const handlePrevious = () =>{
      setNotes(tempNotes[1].question)
  }
  useEffect(()=>{

      setNotes(tempNotes[0])

  },[]);
  return (
    <>
      {notes &&
     <Card notes={notes}
      flip={flipCard} next={handleNext} 
      prev={handlePrevious} 
      btn={button_Enable}/>
      }
    </>
  )
}

export default App
