import './progressbar.css';
const ProgressBar = ({completed}) => {

    return ( 
        <div className="progress-bar">
                  {completed} of 11
        </div>
     );
}
 
export default ProgressBar;