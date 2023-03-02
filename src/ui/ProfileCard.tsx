import { Dispatch, SetStateAction } from "react";
import { Pokemon, usePokemon } from "../api";
import { ErrorMsg } from "./ErrorMsg";
import { Spinner } from "./Spinner";
import * as style from "./ProfileCard.css";

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
    <div className={style.overlay}>
      <div className={style.card}>
        <button className={style.closeButton} onClick={props.onClose}>
          ( x )
        </button>
        <Details pokemon={pokemon} />
        <button className={style.catchButton} onClick={onCatch}>
          {props.catched.has(props.name) ? "release" : "catch"}
        </button>
      </div>
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
      <figure className={style.figure}>
        <img
          className={style.img}
          src={pokemon.picture}
          alt={`Artwork of ${pokemon.name}`}
        />
        <figcaption className={style.figcaption}>{pokemon.name}</figcaption>
      </figure>
      <div>
        weight: {pokemon.weight} &bull; height: {pokemon.height}
      </div>
      <div>not hidden abilities: {pokemon.notHiddenAbilities.join(", ")}</div>
    </>
  );
};
