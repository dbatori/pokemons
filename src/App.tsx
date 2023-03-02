import { useState } from "react";
import { usePokemonTypes, usePokemonNames } from "./api";
import { ErrorMsg, PokemonNames, PokemonTypes, Spinner } from "./ui";
import * as style from "./App.css";

export default function App() {
  const pokemonTypes = usePokemonTypes();
  const [selectedType, setSelectedType] = useState<string>();
  const pokemonNames = usePokemonNames(selectedType);

  if (pokemonTypes === "pending") return <Spinner centered />;
  if (pokemonTypes === "error") return <ErrorMsg centered />;

  return (
    <div className={style.root}>
      <PokemonTypes
        pokemonTypes={pokemonTypes}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        pokemonNames={pokemonNames}
      />
      <PokemonNames pokemonNames={pokemonNames} selectedType={selectedType} />
    </div>
  );
}
