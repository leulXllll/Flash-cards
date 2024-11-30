import { useEffect, useState } from 'react';
import './progressbar.css';
const ProgressBar = ({no_questions,finished}) => {

        const [completed , setCompleted] = useState(finished);

        useEffect(()=>{

            let valueInPercent = Math.floor((finished*100)/no_questions);
            setCompleted(valueInPercent);

        },[no_questions,finished]);

    return ( 
        <div className='progress-cont'>
            <div className="progress-bar">
                    <div style={{
                        height:'100%',
                        width:`${completed}%`,
                        backgroundColor:'brown',
                        transition: "width 0.5s",
                        borderRadius:"15px"

                    }}>
                        {completed}%
                    </div>
            </div>
                   <div> {finished} out of {no_questions}</div>
        </div>
     );
}
 
export default ProgressBar;