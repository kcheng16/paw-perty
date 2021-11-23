import { connect } from "react-redux";
import Navbar from "./navbar_component";
import { withRouter } from "react-router";

const mSTP = state => ({

})

const mDTP = dispatch => ({

})

export default withRouter(connect(mSTP, mDTP)(Navbar))