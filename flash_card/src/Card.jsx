import './cards.css'
const Card = ({notes , flip , next , prev ,btn_prv,btn_nxt}) => {

    console.log('notes id is ',notes.id);

    return ( 
        <div className="card">
            
              {
               (notes.questionBool)? <p>{notes.question}</p>:<p>{notes.answer}</p>
              }
                
            <div className="buttons">
                    <button disabled={btn_prv} onClick={()=>prev(notes.id)}>Previos</button>
                    <button  onClick={flip}>Show answer</button>
                    <button disabled={btn_nxt} onClick={()=>next(notes.id)}>Next</button>
            </div>
        </div>
     );
}
 
export default Card;