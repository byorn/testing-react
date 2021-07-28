const LogClicker = function(name){
    this.name = name;

    this.clickHandler = function(e){
        console.log(this.name);
    }
}
const myObj = {
    myFunction: function(){
        console.log(this === myObj);

        setTimeout(function(){
            console.log(this === myObj);
        },2000)

        setTimeout(()=>{
            console.log(this.constructor.name + "in arrow func");
        },3000)
    },

    callMyObjFun: function(a, b){
        console.log(a + '' + b);
    }
    
}



const myOtherObj = {};


//object shorthand notation
const myObjectionShorthandNotation = {
    myTestFunc(){
        console.log(this === myObjectionShorthandNotation )
        console.log(this);
    }
}



function thisIsGlobal(){
    if(this === window){
        return "this is window or global in windows";
    }
    
   return "this is undefined"
}

const TestingArrowFunctionWhichisLIkeAnotherComponent = () => {
    console.log(this === window);
    console.log(this);
}

const TestingThis = () => {
        const l = new LogClicker('byorn');
        const global = thisIsGlobal()
        console.log('this isnside functional component' + this);
        const myObjMyFunctin = myObj.myFunction;
        return (
            <>{l.name} <br/>
            {thisIsGlobal()} <br/>
            <button onClick={()=>l.clickHandler()}>click me</button>
            <button onClick={()=>myObj.myFunction()}>click me2</button>
            <button onClick={()=>myObjMyFunctin()}>click me3</button>
            <button onClick={()=>{ myObj.callMyObjFun.call(myOtherObj,'a','b')}}>call</button>
            <button onClick={()=>{ myObj.callMyObjFun.apply(myOtherObj, ['a', 'b'])}}>apply , only diff from call is array param</button>
            <button onClick={()=>{ const myboundfun = myObj.callMyObjFun.bind(myOtherObj, 'a', 'b');  
                                    myboundfun();
                                    }}>bind, only diff from call is it returns a ref</button>

            <button onClick={()=>myObjectionShorthandNotation.myTestFunc()}>object shorthand notation</button>         
            <button onClick={TestingArrowFunctionWhichisLIkeAnotherComponent}>testing arrow funcino</button>          
            <br/>
           <p> call apply and bind dont change the value of this in arrow functions  </p>            
            </>
        )
}
export default TestingThis;



