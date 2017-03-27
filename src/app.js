import React, { Component } from 'react';
import { render } from 'react-dom';

import './sass/index.scss';

class CommentBox extends Component{
  constructor(){
    super();

    this.state = {
      name: 'Daniel'
    };
  }

  changeName(e){
    let { name } = this.refs;

    this.setState({name: name.value});
  }

  render(){
    let { state } = this;
    let { name } = state;

    return(
      <div className="CommentBox">
        <div>
          <input ref="name" onKeyUp={(e) => this.changeName(e)} />
        </div>
        Hello <b>¡{name}!</b>
      </div>
    )
  }
}

render(
  <CommentBox />,
  document.querySelector('#app')
);