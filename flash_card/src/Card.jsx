const Card = ({notes , flip , next , prev}) => {

    console.log('notes id is ',notes.id);

    return ( 
        <div className="card">
            
              {
               (notes.questionBool)? <p>{notes.question}</p>:<p>{notes.answer}</p>
              }
                
            <button onClick={()=>prev(notes.id)}>Previos</button>
            <button onClick={flip}>Show answer</button>
            <button onClick={()=>next(notes.id)}>Next</button>
        </div>
     );
}
 
export default Card;