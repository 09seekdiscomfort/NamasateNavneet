// const heading = React.createElement('h1', {id: 'heading'}, ['Namaste React!']);

const heading = React.createElement('div', {id: 'outerDiv'},[ 
    React.createElement('div', {id: 'innerDiv'},
        [
            React.createElement('h1',{id: 'heading'}, 'This is a React Code'), 
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