import { GET_POKEMON, GET_IMAGE } from "./actions";

const initialState = {
  pokemon: [],
  image: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload
      };
    case GET_IMAGE:
      return {
        ...state,
        image: action.payload
      };

    default:
      return { ...state };
  }
}
