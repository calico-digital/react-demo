import React from 'react'

function PokemonListItem({pokemon}) {
    return(
        <li className="border border-gray-400 p-5 flex items-center space-x-4">
            {/* dot */}
            <span className="text-gray-700 text-xl">{pokemon.name}</span>
        </li>
        )
}


export default function PokemonList({pokemons}) {
  return (
    <ul>
        {
            pokemons.length > 0 ? 
                pokemons.map((pokemon, index)=> <PokemonListItem pokemon={pokemon} key={index} />)
            : <h1 className="text-3xl text-gray-600"> No pokemons in database </h1> 
        }
    </ul>
  )
}
