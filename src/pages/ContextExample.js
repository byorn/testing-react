import { useState } from "react";
import React from 'react';
import MyComponent from "../components/MyComponent";

export const MyReactContext = React.createContext();
const ContextExample = (props) => {

    const [state, setState] = useState({ address:'abc'});

    return(
    <MyReactContext.Provider value={state}>
        <MyComponent/>
    </MyReactContext.Provider>
    )

            
}

export default ContextExample;
