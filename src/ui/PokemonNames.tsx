import { useState } from "react";
import { PokemonNames as Names } from "../api";
import { ErrorMsg } from "./ErrorMsg";
import { Spinner } from "./Spinner";
import { ProfileCard } from "./ProfileCard";
import * as style from "./PokemonNames.css";

type Props = {
  pokemonNames: Names;
  selectedType?: string;
};

export const PokemonNames = (props: Props) => {
  const [searchText, setSearchText] = useState("");
  const [filterCatched, setFilterCatched] = useState(false);

  return (
    <main className={style.root}>
      <h1>Pokémon Names</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset className={style.fieldset} disabled={isDisabled(props)}>
          <input
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Pokémon..."
          />
          <div className={style.catchedFilter}>
            <div>Filter catched</div>
            <input
              type="checkbox"
              id="catched-filter"
              checked={filterCatched}
              onChange={() => setFilterCatched((fc) => !fc)}
            />
            <label htmlFor="catched-filter" />
          </div>
        </fieldset>
      </form>
      <List
        pokemonNames={props.pokemonNames}
        selectedType={props.selectedType}
        searchText={searchText}
        filterCatched={filterCatched}
      />
    </main>
  );
};

function isDisabled(props: Props): boolean {
  const { pokemonNames: names, selectedType: type } = props;
  if (names === "pending" || names === "error" || type === undefined)
    return true;
  return names.length === 0;
}

type ListProps = Props & {
  searchText: string;
  filterCatched: boolean;
};

const List = (props: ListProps) => {
  const [selectedName, setSelectedName] = useState<string>();
  const [catched, setCatched] = useState(new Set<string>());
  const { selectedType, pokemonNames, searchText, filterCatched } = props;

  if (selectedType === undefined)
    return <p className={style.info}>Please select a Pokémon type!</p>;
  if (pokemonNames === "pending") return <Spinner />;
  if (pokemonNames === "error") return <ErrorMsg />;
  if (pokemonNames.length === 0)
    return <p className={style.info}>No Pokémon of this type!</p>;

  const filtered = filterNames(
    pokemonNames,
    searchText,
    filterCatched,
    catched
  );
  if (filtered.length === 0) return <p className={style.info}>No match!</p>;

  return (
    <>
      <div className={style.list}>
        {filtered.map((pn) => (
          <button
            className={catched.has(pn) ? style.catchedButton : style.nameButton}
            key={pn}
            onClick={() => setSelectedName(pn)}
          >
            {pn}
          </button>
        ))}
      </div>
      {selectedName !== undefined && (
        <ProfileCard
          name={selectedName}
          catched={catched}
          setCatched={setCatched}
          onClose={() => setSelectedName(undefined)}
        />
      )}
    </>
  );
};

function filterNames(
  names: string[],
  searchText: string,
  filterCatched: boolean,
  catched: Set<string>
): string[] {
  const filtered = names.filter((n) => n.includes(searchText));
  if (filterCatched) return filtered.filter((n) => catched.has(n));
  return filtered;
}
