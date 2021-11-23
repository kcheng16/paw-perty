import { connect } from "react-redux";
import { withRouter } from "react-router";
import SplashComponent from './splash_component'

const mSTP = (state, ownProps) => ({
})

const mDTP = dispatch => ({

})

export default withRouter(connect(mSTP,mDTP)(SplashComponent))