import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h1>RICK AND MORTY (API)</h1>
      <h2>APP BY JUAN</h2>

      <Link to="/home">
        <button className="btn btn-dark btn-lg">LET'S GO!</button>
      </Link>
    </>
  );
};

export default Landing;
