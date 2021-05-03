import React, {useContext} from 'react';
import { MyReactContext } from '../pages/ContextExample';

const MyComponent = (props) => {
    const state =  useContext(MyReactContext);
  
    return(
            <div>My Component 1 {state.address} </div>
    )
}

export default MyComponent;<div>My Component 1</div>