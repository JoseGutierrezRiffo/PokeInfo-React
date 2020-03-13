import React, { useEffect, useState } from "react";
import { getPokemonInfoRequest } from "../../requests/getPokemonInfoRequest";

const Pokemon = () => {
  const [namePokemon, setNamePokemon] = useState("");
  const [infoPokemon, setInfoPokemon] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const getUrl = window.location.hash;
    const index = getUrl.split("/")[2];

    const getApi = async () => {
      const urlPokemonInfo = await getPokemonInfoRequest(index);

      setInfoPokemon(urlPokemonInfo.data);
      setNamePokemon(urlPokemonInfo.data.name);
      setImageUrl(urlPokemonInfo.data.sprites["front_default"]);
    };
    getApi();
  }, []);

  const maysFirstLetter = letter => {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };

  return (
    <div className="container">
      <h1>
        Información basica sobre {maysFirstLetter(namePokemon.toLowerCase())}
      </h1>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID Pokemon</th>
            <th scope="col">Habilidades</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{infoPokemon.id}</th>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Pokemon;
