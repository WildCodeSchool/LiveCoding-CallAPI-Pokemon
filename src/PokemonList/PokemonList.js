import React, { Component } from 'react';

import Pokemon from './Pokemon';

class PokemonList extends Component {
    render() {
      return (
        <article>
            <Pokemon/>
        </article>
      );
    }
};
  
  export default PokemonList;