import React, { useEffect, useState } from "react";
import { getPokemonInfoRequest } from "../../requests/getPokemonInfoRequest";
import { getPokemonSpeciesRequest } from "../../requests/getPokemonSpeciesRequest";

const Pokemon = () => {
  const [namePokemon, setNamePokemon] = useState("");
  const [pokemonIndex, setPokemonIndex] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const getUrl = window.location.hash;
    const index = getUrl.split("/")[2];

    const getApi = async () => {
      const urlPokemonInfo = await getPokemonInfoRequest(index);
      const urlPokemonSpecies = await getPokemonSpeciesRequest(index);

      setNamePokemon(urlPokemonInfo.data.name);
      setImageUrl(urlPokemonInfo.data.sprites["front_default"]);
    };
    getApi();
  }, []);

  return (
    <div>
      <h1>{namePokemon}</h1>
      <img src={imageUrl} />
    </div>
  );
};

export default Pokemon;
