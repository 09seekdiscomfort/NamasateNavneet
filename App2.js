import React from "react";
import  ReactDOM  from "react-dom/client";

//Creating Element Using JSX  - (STATEMENT 2)
const headingJsx = (<h1 
    id="heading" 
    className="head">
        JSX Element jkh
    </h1>); //(Class name is given by using className not just class)

//if we write jsx in multiple line then we have to wrap it inside these bracket => ()

// NOTE (Statement 1 and 2 both are the same thing we can console and check this)


//React Component
// 1. Class Based (OLD)
// 2. FUNCTIONAL (NEW)

// Component inside component is called Component Composition
const HeadingComponent = () =>{
    return (
        <div id='container'>
            <h1>This is a heading Component</h1>
             <HeadingComponent2 />                              
             <HeadingComponent2></HeadingComponent2> 
             {HeadingComponent2()}
        </div>
    )
};

//calling Heading2 Component in 3 way above

//if there is one line of code then a function component can be written as

const HeadingComponent2 = () => <h1>This is a 2nd Heading Component</h1>;

// applying same syntax we can write multiple lines in our code by using Brackets => ()
// In industry maximum people use this syntax

const HeadingComponent3 = () => (
    <div id='container'>
        <h1>This is a 3rd Heading Component</h1>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(headingJsx); // this is how we render a react Element we can not render a react Component like this
 
root.render(
     <>
        <HeadingComponent />
    </>
) // this is how a comonent is rendered in react