import { Fragment } from "react";
import { PokemonNames } from "../api";

type Props = {
  pokemonTypes: string[];
  selectedType?: string;
  setSelectedType(type?: string): void;
  pokemonNames: PokemonNames;
};

export const PokemonTypes = (props: Props) => (
  <div>
    <h1>Pokémon Types</h1>
    <form>
      <fieldset disabled={props.pokemonNames === "pending"}>
        {props.pokemonTypes.map((pt) => (
          <Fragment key={pt}>
            <input
              type="radio"
              name="pokemon-type"
              id={pt}
              checked={pt === props.selectedType}
              onChange={() => props.setSelectedType(pt)}
            />
            <label htmlFor={pt}>{pt}</label>
          </Fragment>
        ))}
      </fieldset>
    </form>
  </div>
);
