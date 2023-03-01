import { useState } from "react";
import { PokemonNames as Names } from "../api";
import { ErrorMsg } from "./ErrorMsg";
import { Spinner } from "./Spinner";
import { ProfileCard } from "./ProfileCard";

type Props = {
  pokemonNames: Names;
  selectedType?: string;
};

export const PokemonNames = (props: Props) => {
  const [searchText, setSearchText] = useState("");
  const [filterCatched, setFilterCatched] = useState(false);

  return (
    <div>
      <h1>Pokémon Names</h1>
      <form>
        <fieldset disabled={isDisabled(props)}>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <input
            type="checkbox"
            checked={filterCatched}
            onChange={() => setFilterCatched((fc) => !fc)}
          />
        </fieldset>
      </form>
      <List
        pokemonNames={props.pokemonNames}
        selectedType={props.selectedType}
        searchText={searchText}
        filterCatched={filterCatched}
      />
    </div>
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

  if (selectedType === undefined) return <p>Please select a Pokémon type!</p>;
  if (pokemonNames === "pending") return <Spinner />;
  if (pokemonNames === "error") return <ErrorMsg />;
  if (pokemonNames.length === 0) return <p>No Pokémon of this type!</p>;

  const filtered = filterNames(
    pokemonNames,
    searchText,
    filterCatched,
    catched
  );
  if (filtered.length === 0) return <p>No match!</p>;

  return (
    <>
      {filtered.map((pn) => (
        <button
          key={pn}
          style={{ backgroundColor: catched.has(pn) ? "green" : "transparent" }}
          onClick={() => setSelectedName(pn)}
        >
          {pn}
        </button>
      ))}
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
