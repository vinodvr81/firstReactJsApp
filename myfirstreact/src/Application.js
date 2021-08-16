import React, {Component} from 'react';

class Application extends Component {    

    render(){
        let name = "Vinod Rangaswamy Vukkalam";
        return (
            <div>
                <h1>Hello {name}!</h1>
                <span>MSc Research in spatial profiling of Quantum dot lasers</span>

            </div>
            
            
            );
    }
}

export default Application;