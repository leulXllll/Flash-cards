import { useEffect, useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  
  let tempNotes = [
    {id:0, questionBool:true, answer:"the truth",question:"whats sth that doesnt have a shadow"},

    {id:1, questionBool:true, answer:"lies",question:"why do people kill a"},

    {id:2, questionBool:true, answer:"magic",question:"how are you doing "},
  ];

   
  const [notes ,setNotes] = useState(null);
  
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
    }
    
    const handlePrevious = (id) =>{

      let index = tempNotes.findIndex(note=>{return note.id==id});

      if(index==1){
        setprevButton(true);
      }
          setnxtButton(false);
          setNotes(tempNotes[index-1]);

    }
  useEffect(()=>{

      setNotes(tempNotes[0]);
      setprevButton(true);

  },[]);
  return (
    <>
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
