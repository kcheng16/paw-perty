import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
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
          <h1>SPLASH COMPONENT</h1>
          <button onClick={() => this.props.logout()}>Logout</button>
          
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
      return(
        <button className="demobutton" onClick={(e) => this.loginDemoUser(e)}>
            Demo User
        </button>
      )
    }}
  }
}

export default Splash;