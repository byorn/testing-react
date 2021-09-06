import React, {useContext} from 'react';
import { MyReactContext } from '../pages/ContextExample2';

const MyComponent2 = (props) => {
    const state =  useContext(MyReactContext);
  
    return(
            <div>My Component 2 {state && state.address} </div>
    )
}

export default MyComponent2;