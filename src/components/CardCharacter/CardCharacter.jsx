import { Link } from 'react-router-dom';

//Usamos lo enviado desde Characters. Aqui hacemos la plantilla para mapear todo.

export const CardCharacter = ({ id, name, image, gender }) => {
  return (
    <div className='card m-2' style={{ minWidth: '12rem' }}>
      <img className='card-img-top' src={image} alt='img' style={{}} />
      <div className='card-body'>
        <Link to={`/detail/${id}`}>
          <h5 className='card-title'>{name}</h5>
          <h5 className='card-title'>Genre: {gender}</h5>
        </Link>
      </div>
    </div>
  );
};
