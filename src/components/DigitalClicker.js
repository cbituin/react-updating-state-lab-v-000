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
      timesClicked: timesClicked += 1
    })
  }
  
  
  render(){
    return(
      <button >{this.clickHandler}</button>
      )
  }
  
}

export default DigitalClicker;