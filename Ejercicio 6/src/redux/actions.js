import axios from "axios";
export const GET_POKEMON = "GET_POKEMON";
export const GET_IMAGE = "GET_IMAGE";

export function getPokemon(name) {
  return async function (dispatch) {
    const types = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`))
      .data;
    return dispatch({ type: GET_POKEMON, payload: types });
  };
}
export function getImage(name) {
  return async function (dispatch) {
    const types = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}`)
    ).data;
    return dispatch({ type: GET_IMAGE, payload: types });
  };
}
