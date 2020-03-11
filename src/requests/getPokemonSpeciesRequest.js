import Axios from "axios";

export const getPokemonSpeciesRequest = async pokemonIndex => {
    return await Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`);
};
