import React from "react";
import { connect } from "react-redux";
import { getCharacters } from "../../redux/actions";
import CardCharacter from "../CardCharacter/CardCharacter";

class Characters extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCharacters();
  }
  render() {
    return (
      <>
        <h1>Characters</h1>
        {this.props.characters?.map((character) => {
          return (
            <CardCharacter
              key={character.id}
              name={character.name}
              id={character.id}
              gender={character.gender}
              image={character.image}
            />
          );
        })}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => {
      dispatch(getCharacters());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
