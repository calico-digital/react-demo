import React from "react";

function PokemonListItem({ pokemon, test }) {
  return (
    <li className={`border border-gray-400 p-5 flex items-center space-x-4 ${getColour(pokemon.type1)}`}>
      {/* dot */}
      <span className="text-gray-700 text-xl">{pokemon.name} {test}</span>
    </li>
  );
}

function getColour(pokemonType) {
    switch (pokemonType) {
        case 'grass':
            return 'bg-green-600';
        case 'poison':
            return 'bg-yellow-600';
        case 'water':
            return 'bg-blue-600';
        case 'bug':
            return 'bg-red-600';
        default:
            return 'bg-gray-600';
    }
}

export default function PokemonList({ pokemons }) {
  return (
    <ul>
      {pokemons.length > 0 ? (
        pokemons.map((individualPokemon, index) => (
          <PokemonListItem pokemon={individualPokemon} test={index} key={index} />
        ))
      ) : (
        <h1 className="text-3xl text-gray-600"> No pokemons in database </h1>
      )}
    </ul>
  );
}
