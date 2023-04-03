import React from "react"
import Head from "next/head"
import pokemons from "@/assets/sampledataset.json"
import PokemonList from "@/components/PokemonList"
import Title from "@/components/Title"

export default function Pokemons({pokemonsList}) {
  return (
    <>
      <Head>
        <title>Pokemons</title>
      </Head>

      <Title>
        <span>List of pokemons</span>
      </Title>
      <PokemonList pokemons={pokemonsList} />
    </>
  )
}

export async function getServerSideProps(context) {
  console.log("pokemon", pokemons)
  // const response = await fetch(url)
  // const data = await response.json()

  return {
    props: {
      pokemonsList: pokemons,
    },
  }
}
