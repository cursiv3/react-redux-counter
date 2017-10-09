import { connect } from "react-redux";
import { cool, awesome, neato, addClick, removeClick } from "../actions";
import Counter from "./Counter";

const mapDispatchToProps = dispatch => {
  return {
    sendCool: () => {
      dispatch(cool());
    },
    sendAwesome: () => {
      dispatch(awesome());
    },
    sendNeato: () => {
      dispatch(neato());
    },
    onAddClick: () => {
      dispatch(addClick());
    },
    removeClick: () => {
      dispatch(removeClick());
    }
  };
};

export default connect(null, mapDispatchToProps)(Counter);
