import Axios from "axios";

export const getPokemonInfoRequest = async pokemonIndex => {
  return await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
};
