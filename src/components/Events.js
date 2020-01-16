import React, { Component } from 'react'

class Events extends Component {
    constructor(props){
        super(props)
        this.state = { Name: "See me"}
        
    }
    
    handleName(){
        alert ("My name is chessah")
    }
    
    render() {        
       
        return (
            <div>
                <button onClick={this.handleName()}> Click Me Now </button>
                
            </div>
        )
    }
}

export default Events
