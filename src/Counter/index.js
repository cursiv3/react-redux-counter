import { connect } from "react-redux";
import { addClick, removeClick } from "../actions/index";
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

export default connect(mapDispatchToProps)(Counter);
