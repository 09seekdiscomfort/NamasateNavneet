import React from "react";
import  ReactDOM  from "react-dom/client";

// const heading = React.createElement('h1', {id: 'heading', key: '01'}, ['Namaste React!']);

const heading = React.createElement('div', {id: 'outerDiv', key: 1},[ 
    React.createElement('div', {id: 'innerDiv'},
        [
            React.createElement('h1',{id: 'heading'}, 'This is a React Code by Navneet 🚀'), 
            React.createElement('h2',{id: 'heading'}, 'Hello World')]   //react will throw error for something called key
    ),
    React.createElement('div', {id: 'innerDiv2'},
    [
        React.createElement('h1',{id: 'heading'}, 'This is a React Code'), 
        React.createElement('h2',{id: 'heading'}, 'Hello World')]
    )
]
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);