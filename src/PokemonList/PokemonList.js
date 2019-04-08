import React, { Component } from 'react';

import Pokemon from './Pokemon';

class PokemonList extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemons : []
        }
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(responseInJson => this.setState({ pokemons : responseInJson.results }))
    }

    render() {
      return (
        <article>
            {this.state.pokemons.map((pokemon, index) => <Pokemon key={index} {...pokemon}/>)}
        </article>
      );
    }
};

  export default PokemonList; 
