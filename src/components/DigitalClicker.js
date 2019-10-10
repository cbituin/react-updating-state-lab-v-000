// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      timesClicked: 0
    }
  }
  
  clickHandler = () => {
          let newState = timesClicked + 1

    this.setState({
      timesClicked: newState
    })
  }
  
  
  render(){
    return(
      <button onClick={this.clickHandler} >{this.state.timesClicked}</button>
      )
  }
  
}

export default DigitalClicker;