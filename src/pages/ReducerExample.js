import React, {useReducer} from "react";
const counterReducer = (state, action)=>{
    switch(action.type) {
        case 'INCREMENT' : {
            return {counter: state.counter + 1}    
        }
        default: return state;
    }
}

const ReducerExample = () => {

  
    const initialState = { counter: 0 };
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return  <div> counter value is: { state.counter } 
    <br/>
    <button onClick={()=>dispatch({type:'INCREMENT'})} > increment </button>
    </div>
}
export default ReducerExample;