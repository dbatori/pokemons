import { Dispatch, SetStateAction } from "react";
import { Pokemon, usePokemon } from "../api";
import { ErrorMsg } from "./ErrorMsg";
import { Spinner } from "./Spinner";

type Props = {
  name: string;
  catched: Set<string>;
  setCatched: Dispatch<SetStateAction<Set<string>>>;
  onClose(): void;
};

export const ProfileCard = (props: Props) => {
  const pokemon = usePokemon(props.name);

  const onCatch = () => {
    if (props.catched.has(props.name)) {
      props.setCatched((c) => {
        const newCatched = new Set(c);
        newCatched.delete(props.name);
        return newCatched;
      });
    } else {
      props.setCatched((c) => {
        const newCatched = new Set(c);
        newCatched.add(props.name);
        return newCatched;
      });
    }
  };

  return (
    <div>
      <button onClick={props.onClose}>(X)</button>
      <Details pokemon={pokemon} />
      <button onClick={onCatch}>
        {props.catched.has(props.name) ? "release" : "catch"}
      </button>
    </div>
  );
};

type DetailsProps = {
  pokemon: Pokemon;
};

const Details = (props: DetailsProps) => {
  const pokemon = props.pokemon;

  if (pokemon === "pending") return <Spinner />;
  if (pokemon === "error") return <ErrorMsg />;
  return (
    <>
      <figure>
        <img src={pokemon.picture} alt={`Artwork of ${pokemon.name}`} />
        <figcaption>{pokemon.name}</figcaption>
      </figure>
      <div>
        <span>Weight</span>
        {pokemon.weight}
      </div>
      <div>
        <span>Height</span>
        {pokemon.height}
      </div>
      <h2>Not Hidden Abilities</h2>
      <div>
        {pokemon.notHiddenAbilities.map((a) => (
          <span key={a}>{a}</span>
        ))}
      </div>
    </>
  );
};
