import { connect } from "react-redux";
import { addClick, removeClick } from "../actions";
import Counter from "./Counter";

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: () => {
      dispatch(addClick());
    },
    onRemoveClick: () => {
      dispatch(removeClick());
    }
  };
};

const wrappedCounter = connect(mapDispatchToProps)(Counter);

export default wrappedCounter;
