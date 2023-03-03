import { cleanDetail, getCharacterDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//Para el ID.
import { Link, useParams } from "react-router-dom";

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
    <div>
      <h1>{characterDetail?.name}</h1>
      <img
        src={characterDetail?.image}
        alt="img"
        style={{ borderRadius: "9rem" }}
      />
      <br />
      <label>Status:</label>
      <p>{characterDetail?.status}</p>
      <label>Gender:</label>
      <p>{characterDetail?.gender}</p>
      <label>Origin:</label>
      <p>{characterDetail?.origin?.name}</p>
      <label>Location:</label>
      <p>{characterDetail?.location?.name}</p>
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default CharacterDetail;
