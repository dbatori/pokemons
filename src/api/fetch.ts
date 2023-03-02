const url = "https://pokeapi.co/api/v2";

export type FetchState = "pending" | "error";

export type Pokemon = {
  picture: string;
  name: string;
  weight: number;
  height: number;
  notHiddenAbilities: string[];
};

export function fetchPokemonTypes() {
  return get("type?limit=1000", extractPokemonTypes);
}

export function fetchPokemonNames(type: string): Promise<string[]> {
  return get(`type/${type}`, extractPokemonNames);
}

export function fetchPokemon(name: string): Promise<Pokemon> {
  return get(`pokemon/${name}`, extractPokemon);
}

async function get<T>(path: string, extract: (data: any) => T): Promise<T> {
  try {
    //await new Promise((r) => setTimeout(r, 300));
    //if (Math.random() < 0.25) throw new Error();
    const response = await fetch(`${url}/${path}`);
    if (!response.ok) throw new Error("Network response was not OK");
    return extract(await response.json());
  } catch (e) {
    throw new Error(`Can't GET /${path}`);
  }
}

type HasName = {
  name: string;
};

function extractPokemonTypes(data: any): string[] {
  return data.results.map((r: HasName) => r.name);
}

function extractPokemonNames(data: any): string[] {
  return data.pokemon.map((p: { pokemon: HasName }) => p.pokemon.name);
}

function extractPokemon(data: any): Pokemon {
  const picture = data.sprites.other["official-artwork"].front_default;
  const name = data.name;
  const weight = data.weight;
  const height = data.height;
  const notHiddenAbilities = data.abilities
    .filter((a: { is_hidden: boolean }) => !a.is_hidden)
    .map((a: { ability: HasName }) => a.ability.name);
  return { picture, name, weight, height, notHiddenAbilities };
}
