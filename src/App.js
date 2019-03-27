import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonHolder from './ButtonHolder';
import OperatorHolder from './OperatorHolder';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentLabel: "", result: "" };
    this.updateButtonsPressed = this.updateButtonsPressed.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  updateButtonsPressed(buttonLabel) {
    if(buttonLabel == 'AC')
    { 
      this.setState({currentLabel : "", result : ""});
      return;
    }
    var currentLabel = this.state.currentLabel;
    var updatedLabel = currentLabel + buttonLabel;
    console.log(updatedLabel);

    this.setState({ currentLabel: updatedLabel })
  }

  evaluate() {
    var s = this.state.currentLabel;
    var total = 0, s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (s.length) {
      total += parseFloat(s.shift());
    }

    this.setState({ currentLabel: total });
  }

  render() {
    const style = { 
      padding : '40px'
    }
    return (
      <div className="App">
        <ButtonHolder updateButtonsPressed={this.updateButtonsPressed} />
        <OperatorHolder updateButtonsPressed={this.updateButtonsPressed} />
        <Button evaluate={this.evaluate} label = "=" > = </Button>
        <div className = "label-primary"><label> {this.state.currentLabel} </label></div>
      </div>
    );
  }
}

export default App;
;