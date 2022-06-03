import { GET_TYPES, GET_TYPES_ID, GET_POKEMON } from "./actions";

const initialState = {
  types: [],
  typeDetail: [],
  pokemons: [],
  pokemon: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TYPES:
      return {
        ...state,
        types: action.payload
      };
    case GET_TYPES_ID:
      return {
        ...state,
        typeDetail: action.payload.pokemon
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      };

    default:
      return { ...state };
  }
}
