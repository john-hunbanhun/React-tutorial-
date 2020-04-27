import { connect } from "react-redux";
import { clickSquare, jumpToPast } from "./Actions";
import { Game } from "./Game";

 const mapStateToProps = (state, ownProps) => {
  return state.game;
};

 const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: index => {
      dispatch(clickSquare(index));
    },
    jumpTo: () => {}
  };
};

 export const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);