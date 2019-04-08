import React, { Component } from 'react';
import './App.css';

import PokemonList from './PokemonList/PokemonList';

class App extends Component {
  render() {
    return (
      <main>
        <PokemonList/>
      </main>
    );
  }
};

export default App;
