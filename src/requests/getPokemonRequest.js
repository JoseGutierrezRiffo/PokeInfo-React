import Axios from "axios";

export const getPokemonRequest = async () => {
  return await Axios.get("https://pokeapi.co/api/v2/pokemon");
};

