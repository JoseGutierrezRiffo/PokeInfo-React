import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const PokemonCard = ({ name, url }) => {
  const [namePokemon, setNamePokemon] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pokemonIndex, setPokemonIndex] = useState("");

  useEffect(() => {
    setNamePokemon(name);
    setPokemonIndex(url.split("/")[6]);
    setImageUrl(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`
    );
  }, []);

  const maysFirstLetter = letter => {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <Link to={`pokemon/${pokemonIndex}`}>
        <div className="card-container">
          <div className="card card-back">
            <h6 className="card-header">{pokemonIndex}</h6>
            <img
              className="card-img-top rounded mx-auto mt-2"
              src={`${imageUrl + pokemonIndex}.png`}
            />
            <div className="card-body mx-auto">
              <h6 className="card-title">
                {maysFirstLetter(namePokemon.toLowerCase())}
              </h6>
            </div>
          </div>

          <div className="card card-front ">
            <img
              className="card-img-top rounded mx-auto mt-0"
              src={
                "https://i.pinimg.com/originals/15/11/39/15113952d52bd1cbb1b7b446baffdbb3.jpg"
              }
            />
            <div className="card-body mx-auto"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
