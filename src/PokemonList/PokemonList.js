import React, { Component } from 'react';

import Pokemon from './Pokemon';

class PokemonList extends Component {

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(responseInJson => {console.log(responseInJson)})
    }

    render() {
      return (
        <article>
            <Pokemon/>
        </article>
      );
    }
};

  export default PokemonList; 
