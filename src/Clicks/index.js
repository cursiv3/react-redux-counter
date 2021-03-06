import { connect } from "react-redux";
import Clicks from "./Clicks";

const mapStateToProps = state => ({
  message: state.message.message,
  clicks: state.clicks.clicks
});

export default connect(mapStateToProps, null)(Clicks);
