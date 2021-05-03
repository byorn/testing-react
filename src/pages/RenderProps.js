
const RenderProp = () => {
    return  <> <h3>Render Props</h3> <br/>
    
        {/* A Component that accepts a function as a Prop to be rendered*/}

        <MyWrapperComponent renderProp={(wrapperComponentState)=>(<MyComponent1 commonState={wrapperComponentState}/>)}/>

        <MyWrapperComponent renderProp={(wrapperComponentState)=>(<MyComponent2 commonState={wrapperComponentState}/>)}/>
    </>
}
export default RenderProp;

// Holds the shared functionailty
const MyWrapperComponent = ({renderProp}) => {

    let wrapperComponentState = 0;


    return  <div> #################### wrapper  <br/>


            {renderProp(wrapperComponentState)}  <br/>

            <div> #################### wrapper  ends </div>


    </div>
}

const MyComponent1 = ({commonState}) => {
    return <>My Component 1 {commonState} </>
}

const MyComponent2 = ({commonState}) => {
    return <>My Component 2 {commonState}</>
}