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
    this.demoUser = {username: 'Demo', password: 'password'}
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
    this.props.processForm(user)
      .then(() => {this.props.closeModal()});
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  render() {
    return(
      <div className="session-form"> 
        <h2 className="session-form-type">{this.props.formType}</h2>
        <p className="session-form-close-button" onClick={()=> this.props.closeModal()}>X</p> 
        <form className="session-form"onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="Username"/>
            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password"/>

          {this.props.formType === 'Sign Up' ? (
              <>
                  <input className="session-form-extra" onChange={this.update('email')} name="user-email" type="text" placeholder="Email address" value={this.state.email} />
                  <input className="session-form-extra" onChange={this.update('bio')} name="user-bio" type="textarea" placeholder="Tell us a little about your dog" value={this.state.bio} />
              </>
            ) : ("")
          }
    {/* rendering errors if any */}
        <ul className="session-errors"> {Array.isArray(this.props.errors) ? this.props.errors.map((error, idx) => <li key={idx}>{error}</li>) : "" } </ul>

          <button className="submit-button" type='submit'>{this.props.formType}</button>
    {/* DEMO USER */}
          {this.props.formType === 'Login' ?
            <button 
            className="demobutton" 
            onClick={(e) => this.loginDemoUser(e)}>
            Demo Login
            </button>
            :
            ""
          }
        </form>

        <div className="session-line"></div>

        {/* Footer */}
        <div className="session-footer">
          {this.props.formType === 'Sign Up' ?
            <div>
              <div>Already have an account?</div>
              {this.props.otherForm}
            </div>
            :
            <div>
              <div>Don't have an account?</div>
              {this.props.otherForm}
            </div>
          }
        </div>
      </div>
    )
  }
}

export default SessionForm