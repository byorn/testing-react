import React, {Component, useState} from 'react'
import './CodeReusePattern.css';

const XComponent = () => (<div className="xcomp"> This is XComponent </div>)
const YComponent = () => (<div className="ycomp"> This is YComponent </div>)

const CodeReusePattern = () => {
 
    const XComponentWithBorder = withBorderHOC(XComponent);

    return (<>


         <XComponentWithBorder />
         <Border>   <YComponent/>  </Border>       
    
            </>)
}

const Border = ({children})=>{
    const [borderClass, setBorderClass] = useState('no-border');
    return (
        <div className={borderClass} onMouseLeave={()=>setBorderClass('no-border')} onMouseEnter={()=>setBorderClass('border-class')}>
                  { children }
        </div>    
    )
}

const withBorderHOC = (Innercomponent) => {
    const BorderdComponen = (props)=>{
        return (<Border>  <Innercomponent/>  </Border>)
    }
    return BorderdComponen;
}

export default CodeReusePattern;