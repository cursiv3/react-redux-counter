import { connect } from "react-redux";
import Clicks from "./Clicks";

const mapStateToProps = state => {
  return { clicks: state.clicks };
};

export default connect(mapStateToProps)(Clicks);
