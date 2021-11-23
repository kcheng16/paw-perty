import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      bio: "",
      email: ""
    };
    this.demoUser = {username: 'demo', password: 'password'}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  loginDemoUser(e) {
    e.preventDefault()
    this.props.login(this.demoUser)
    this.props.closeModal()
  }

  update(type) {
    return (e) => this.setState({ [type]: e.target.value})
  }

  componentDidMount() {
    if (this.props.sessionId !== null ) {
      this.props.history.push('/')
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user).then(this.props.closeModal);
  }

  render() {
    return(
      <div>        
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" value={this.state.username} onChange={this.update('username')} /></label>
          <label>Password
            <input type="password" value={this.state.password} onChange={this.update('password')} /></label>

          {this.props.formType === 'Signup' ? (
              <>
                <label htmlFor="user-email">Email address</label>
                  <input onChange={this.update('email')} name="user-email" type="text" value={this.state.email} />
                <label htmlFor="user-bio">Tell us a little about yourself and your dog</label>
                  <input onChange={this.update('bio')} name="user-bio" type="text" value={this.state.bio} />
              </>
            ) : ("")
          }

          <button type='submit'>{this.props.formType}</button>
          <button 
            className="demobutton" 
            onClick={(e) => this.loginDemoUser(e)}>
            Demo User
          </button>
        </form>
        
        {/* show buttons for: sign-up, login */}
        {/* {this.props.location.pathname === '/login' ? <Link to='/signup'>Signup</Link> : <Link to='/login'>Login</Link> } */}

        {/* rendering errors if any */}
        <ul> {Array.isArray(this.props.errors) ? this.props.errors.map((error, idx) => <li key={idx}>{error}</li>) : "" } </ul>
      </div>
    )
  }
}

export default SessionForm