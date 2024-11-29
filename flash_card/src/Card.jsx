const Card = ({notes , flip , next , prev ,btn}) => {

    console.log('notes id is ',notes.id);

    return ( 
        <div className="card">
            
              {
               (notes.questionBool)? <p>{notes.question}</p>:<p>{notes.answer}</p>
              }
                
            <button onClick={()=>prev(notes.id)}>Previos</button>
            <button  onClick={flip}>Show answer</button>
            <button disabled={btn} onClick={()=>next(notes.id)}>Next</button>
        </div>
     );
}
 
export default Card;