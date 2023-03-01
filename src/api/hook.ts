import { useState, useEffect } from "react";
import {
  fetchPokemon,
  fetchPokemonTypes,
  fetchPokemonNames,
  FetchState,
  Pokemon as PokemonData,
} from "./fetch";

type PokemonTypes = string[] | FetchState;

export function usePokemonTypes(): PokemonTypes {
  const [pokemonTypes, setPokemonTypes] = useState<PokemonTypes>("pending");

  useEffect(() => {
    const fetch = async () => {
      try {
        setPokemonTypes(await fetchPokemonTypes());
      } catch (e) {
        setPokemonTypes("error");
      }
    };

    fetch();
  }, []);

  return pokemonTypes;
}

export type PokemonNames = string[] | FetchState;

export function usePokemonNames(type?: string): PokemonNames {
  const [pokemonNames, setPokemonNames] = useState<PokemonNames>("pending");

  useEffect(() => {
    if (type === undefined) {
      setPokemonNames([]);
      return;
    }

    const fetch = async () => {
      setPokemonNames("pending");
      try {
        setPokemonNames(await fetchPokemonNames(type));
      } catch (e) {
        setPokemonNames("error");
      }
    };

    fetch();
  }, [type]);

  return pokemonNames;
}

export type Pokemon = PokemonData | FetchState;

export function usePokemon(name: string): Pokemon {
  const [pokemon, setPokemon] = useState<Pokemon>("pending");

  useEffect(() => {
    const fetch = async () => {
      setPokemon("pending");
      try {
        setPokemon(await fetchPokemon(name));
      } catch (e) {
        setPokemon("error");
      }
    };

    fetch();
  }, [name]);

  return pokemon;
}
