import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'My initial state'
    }
  }

  update(event){
    this.setState({
      text: event.target.value
    });
  }

  clickButton(){
    alert(this.state.text);
  }

  render() {
    return (
      <main>
        <NavBar />
      </main>
    );
  }
}

export default App;
