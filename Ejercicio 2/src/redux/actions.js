import axios from "axios";
export const GET_TYPES = "GET_TYPES";
export const GET_TYPES_COMPARE = "GET_TYPES_COMPARE";
export const GET_TYPES_ID = "GET_TYPES_ID";
export const GET_POKEMON = "GET_POKEMON";

export function getTypes() {
  return async function (dispatch) {
    const types = (await axios.get("https://pokeapi.co/api/v2/type")).data
      .results;
    return dispatch({ type: GET_TYPES, payload: types });
  };
}

export function getTypesID(url) {
  return async function (dispatch) {
    const types = (await axios.get(url)).data;
    return dispatch({ type: GET_TYPES_ID, payload: types });
  };
}

export function getPokemon(name) {
  return async function (dispatch) {
    const types = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`))
      .data;
    return dispatch({ type: GET_POKEMON, payload: types });
  };
}
