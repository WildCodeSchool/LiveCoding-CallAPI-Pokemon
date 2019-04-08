# Pokemon List - API call

## Goal :

Create a list of Pokemon with the data from 'PokeAPI'

## Steps :
0. A component Pokemon in a component PokemonList without API call.
1. In PokemonList, I use **fetch** to call the API with the URL _https://pokeapi.co/api/v2/pokemon_ and get a **response** which I display in the console.
2. In PokemonList, I use _then_ to specify what function should be executed when the browser receive the PokeApi response. We use the json() response method to make it an object.
3. In PokemonList, I create a **State** with an attribute pokemons with the value _[ ]_ by default.  
   In my API call I change the value of pokemons with **setState** after I got my JSON response. I log _this.state.pokemons_ in render or I use react inspector to see state change.