import React, { Component } from 'react';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    const itemsM = [
      {
        id: 1,
        name: 'Home',
        href: '#home',
        classItem: 'active',
        favicon: 'fa fa-home'
      },{
        id: 2,
        name: 'Projects',
        href: '#projects',
        classItem: '',
        favicon: 'fa fa-gamepad'
      },{
        id: 3,
        name: 'Portafolio',
        href: '#portafolio',
        classItem: '',
        favicon: 'fa fa-flask'
      },{
        id: 4,
        name: 'Contact',
        href: '#contact',
        classItem: '',
        favicon: 'fa fa-mobile'
      }
    ];

    return (
      <main>
        <NavBar items={itemsM} />
      </main>
    );
  }
}

export default App;
