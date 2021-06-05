import React, {useState, useEffect} from 'react';
const ButtonToolBar = ({dirty, onSave, onCalculate, initialValue}) => {

    const [isSaveDisabled, setSaveDisabled] = useState(true);
    const [isCalculateDisabled, setCalculateDisabled] = useState(initialValue);

    useEffect(()=>{
            setCalculateDisabled(!dirty)
    },[dirty])

    return(
        <>
        <button disabled={isCalculateDisabled} type="button" onClick = {()=>{ onSave(); setCalculateDisabled(true); setSaveDisabled(false); }}>Calculate</button>
        <button disabled={isSaveDisabled} type="button" onClick = {()=>{ onCalculate(); setSaveDisabled(true);} }>Save</button>
        <button type="submit">Submit</button>
        </>
    )

}
export default ButtonToolBar;