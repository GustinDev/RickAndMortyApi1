import { Link } from "react-router-dom";

//Usamos lo enviado desde Characters. Aqui hacemos la plantilla para mapear todo.

export const CardCharacter = ({ id, name, image }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
      </Link>
      <img src={image} alt="img" style={{ borderRadius: "9rem" }} />
    </div>
  );
};
