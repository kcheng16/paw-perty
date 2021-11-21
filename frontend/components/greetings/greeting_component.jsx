import React from "react";
import { Link } from "react-router-dom";
import ProfileComponent from "../profile/user_show_component"

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.demoUser = {username: 'demo', password: 'password'}
  }

  loginDemoUser(e) {
    e.preventDefault()
    this.props.login(this.demoUser)
  }

  render() {
    {if (this.props.currentUser) {
      return (
        <div>
          <h1>GREETING COMPONENT</h1>
          <h1>Welcome {this.props.currentUser.username}</h1>
          <button onClick={() => this.props.logout()}>Logout</button>

          {/* <ProfileComponent 
            currentUser={this.props.currentUser}
          /> */}
        </div>
      )
    } else if(this.props.location.pathname === '/'){
        return(
          <div>
            <Link to='/signup'>Sign Up</Link>
            <Link to='/login'>Login</Link>
          </div>
        )
    } else {
      // return ""
      return(
        <button className="demobutton" onClick={(e) => this.loginDemoUser(e)}>
            Demo User
        </button>
      )
    }}
  }
}

export default Greeting;