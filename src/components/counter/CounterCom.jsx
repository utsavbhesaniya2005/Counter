import { useState } from "react";
import './CounterCom.css';
import MyButton from "./button/MyButton";

const CounterCom = () => {

    let [count, setCount] = useState(0);

    const handleInc = () => {
       
        console.log("Inc Add");

        setCount(++count);
        
    }

    const handleDec = () => {
       
        console.log("Dec Add");

        if(count > 0){
            setCount(--count);
        }
        
    }

    return(

        <div className="count">
            <MyButton type="dec" handleFun={handleDec}/>
            <span className="display">{count}</span>
            <MyButton type="inc" handleFun={handleInc}/>
        </div>

    )

}

export default CounterCom;