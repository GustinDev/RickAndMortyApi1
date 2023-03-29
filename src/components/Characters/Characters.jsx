import { useEffect } from 'react';
//Importamos la accion
import { getCharacters } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { CardCharacter } from '../CardCharacter/CardCharacter';

const Characters = () => {
  //Hacemos un dispatch de la acción, cuando Characters está montado (en uso), sólo en ese momento (no en Landing)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  //Acceder a la información del estado global, state.characters, queda un array:
  //ERROR
  const characters = useSelector((state) => state.characters);

  //El display:
  return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
      {
        //Mapeamos cada character para displayearlo desde CardCharacter.
        characters.map((character) => {
          //A cada uno lo displayamos, le pasamos la info a Card para que lo ubique uno por uno.
          return (
            <CardCharacter
              key={character?.id}
              id={character?.id}
              name={character?.name}
              gender={character?.gender}
              image={character?.image}
              species={character?.species}
              origin={character?.origin.name}
            />
          );
        })
      }
    </div>
  );
};

export default Characters;
