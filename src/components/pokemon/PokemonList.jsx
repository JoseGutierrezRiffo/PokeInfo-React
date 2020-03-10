import React, { useState, useEffect } from "react";
import { getPokemonRequest } from "../../requests/getPokemonRequest";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [data, dataSet] = useState(false);

  useEffect(() => {
    const getApi = async () => {
      const url = await getPokemonRequest();
      dataSet(url.data["results"]);
    };
    getApi();
  }, []);

  console.log(data);

  return (
    <div>
      {data ? (
        <div className="row">
          {data.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      ) : (
        <h1>Loading Pokemon</h1>
      )}
    </div>
  );
};

export default PokemonList;
