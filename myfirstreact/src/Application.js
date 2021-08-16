import React, {Component} from 'react';

class Application extends Component {    
    constructor(props){
        super(props);
        this.state = {
            count: 0

        }
    }

    handleClick = () => {
        this.setState({count:this.state.count + 1});
    }

    componentWillMount(props,state){

    }
    componentDidMount(props,state){

    }
    componentWillRecieveProps(props){

    }
    componentWillUpdate(props,state){
                         
    }
    componentDidUpdate(props,state){
                         
    }    
    render(){
        let name = "Vinod Rangaswamy Vukkalam";
        let {count} = this.state;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <span>MSc Research in Spatial Profiling of Quantum dot lasers</span>
                <h1> You clicked the button {count} this many times</h1>
                <span>
                    <button onClick = {() => this.handleClick()}>Click Here</button>
                </span>
            </div>
            
            
            );
    }
}

export default Application;