import { connect } from "react-redux";
import Clicks from "./Clicks";

const mapStateToProps = state => ({
  message: state.message,
  clicks: state.clicks
});

export default connect(mapStateToProps, null)(Clicks);
