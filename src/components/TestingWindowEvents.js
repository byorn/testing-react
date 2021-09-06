import React, {useEffect, useCallback} from 'react'
import { useState } from 'react';

/** Hey Byorn, when you use useCallback the reference that gets passed to line 31 remove event listener should be the exact reference . */

class Test{
    mouseMoveEvent(){
        console.log("mouse moved", new Date());
    }
}

const t = new Test();



const TestingWindowEvents = () => {
    
    useEffect(()=>{

        window.addEventListener('mousemove', mouseMoveEvent);

    }, []);

    const [count, setCount] = useState(0);

    const mouseMoveEvent = useCallback(() => {
         console.log("mouse moved", new Date());
    },[]);

    const removeEventListener = ()=>{
        window.removeEventListener('mousemove',mouseMoveEvent);
        console.log("removed", new Date());
    }
        return (
        <>testing window events {count}
        <button onClick={removeEventListener}>Stop</button>
        <button onClick={()=>setCount(count+1)}>Add</button>
        </>
        )
}
export default TestingWindowEvents;



