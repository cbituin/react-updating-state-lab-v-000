// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      timesClicked: 0
    }
  }
  
  clickHandler = () ={
    this.setState({
      timesClicked += 1;
    })
  }
  
  
  render(){
    return(
      <button >{this.state.timesClicked}</button>
      )
  }
  
}

export default DigitalClicker;