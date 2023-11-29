import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";

const Footer = ()=>{
    return(
        <div id='footer'>

        </div>
    )
}

const FoodDay = () =>{
    return(
        <div className='foodPageContainer'>
            <Header />
            <Body />
         </div>
        )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FoodDay />);