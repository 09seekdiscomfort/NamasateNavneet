import React from 'react'

class AboutClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            count2: 2
        };
    }
    render(){
        return(
            <>
                <div>{(this.props.name)}</div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Click to Increase Count</button>
            </>

        );
    } 
}

export default AboutClass