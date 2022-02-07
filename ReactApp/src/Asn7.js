
import {useState} from "react";
function Counter(){
    let [count,setcount]=useState(0);
    function increase(){
        setcount(count+2);
    }
    function decrease(){
        setcount(count-2);
    }
    function reset(){
        setcount(0);
    }
    return(
        <div className="Counter">
            count={count}<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Counter;