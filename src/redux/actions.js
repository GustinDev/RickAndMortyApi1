import { GET_CHARACTERS, CHARACTER_DETAIL, CLEAN_DETAIL } from "./action-types";
import axios from "axios";

//Hacemos una acción redux para traer a todos los character y le damos un type.

export const getCharacters = () => {
  //Si hacemos una peticion a una api retornamos una función con dispatch.
  return async function (dispatch) {
    //Le avisamos que estamos haciendo algo asincrono y esperamos la respuesta para guardarla en una variable.

    //Axios hace un get de por si, pide la información del api y la guardamos.
    let response = await axios("https://rickandmortyapi.com/api/character");

    //Le decimos que ejecute la acción a nombre de GET_CHARACTERS y que el payload sea la información.data del api.

    return dispatch({ type: GET_CHARACTERS, payload: response.data.results });

    //Axios nos da un objeto, dentro de ahí está .data dónde estan los datos del api, dentro hay está .results dónde hay un array con los personajes.
  };
};

//La podemos hacer con fetch o axios.

export const getCharacterDetail = (id) => {
  return function (dispatch) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: CHARACTER_DETAIL, payload: data }))
      .catch((error) => {
        console.log(error);
      });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
