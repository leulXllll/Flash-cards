const Card = ({notes , flip}) => {
    return ( 
        <div className="card">
            <p>{notes} </p>
            <button>Previos</button>
            <button onClick={flip}>Show answer</button>
            <button>Next</button>
        </div>
     );
}
 
export default Card;