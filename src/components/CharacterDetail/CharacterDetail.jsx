import { cleanDetail, getCharacterDetail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//Para el ID.
import { Link, useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const characterDetail = useSelector((state) => state.characterDetail);

  useEffect(() => {
    dispatch(getCharacterDetail(id));
    //Para resetear el estado, después de que se ejecuta.
    return () => {
      dispatch(cleanDetail());
    };
  }, []);

  return (
    <div className='d-flex justify-content-center'>
      <div
        className='card d-flex justify-content-center m-2'
        style={{ maxWidth: '20rem' }}
      >
        <img className='card-img-top' src={characterDetail?.image} alt='img' />
        <div className='card-body'>
          <h2 className='card-title'>{characterDetail?.name}</h2>
          <label>Status:</label>
          <p>{characterDetail?.status}</p>
          <label>Gender:</label>
          <p>{characterDetail?.gender}</p>
          <label>Origin:</label>
          <p>{characterDetail?.origin?.name}</p>
          <label>Location:</label>
          <p>{characterDetail?.location?.name}</p>
          <Link to='/home'>
            <button className='btn btn-primary'>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
