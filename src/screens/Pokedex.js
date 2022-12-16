import { SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(20, 0);

      const pokemonsArray = [];
      for (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...pokemonsArray]);
      console.log(pokemonsArray);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
}
