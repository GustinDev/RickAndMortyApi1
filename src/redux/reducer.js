import { GET_CHARACTERS, CHARACTER_DETAIL, CLEAN_DETAIL } from "./action-types";

const initialState = {
  characters: [],
  characterDetail: {},
};

const reducer = (state = initialState, action) => {
  //Para cada type se ejecuta algo.
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        //Copiamos para no perder characterDetail
        ...state,
        //Llenamos la información de nuestro initialState.characters. Ponemos la info de payload en characters.
        characters: action.payload,
      };
    case CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    default:
      return { ...state };
  }
};

export default reducer;
