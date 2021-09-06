import { useState } from "react";
import React from 'react';
import MyComponent2 from "../components/MyComponent2";

export const MyReactContext = React.createContext();
const ContextExample2 = (props) => {

    const [state, setState] = useState({ address:'abc'});

    return(
    <MyReactContext.Provider value={{address: state.address, setState}}>
        <MyComponent2/>
    </MyReactContext.Provider>
    )

            
}

export default ContextExample2;
