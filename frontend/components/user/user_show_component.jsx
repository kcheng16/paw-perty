import React from "react"

class UserShowComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: this.props.currentUser.username,
      email: this.props.currentUser.email,
      bio: this.props.currentUser.bio
    }
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  //will need in future for update
  // update(field){
  //   return e => this.setState({[field]: e.currentTarget.value})
  // }

  //will need in future for update
  // handleSubmit(e){
  //   e.preventDefault();
  // }

  render(){
    if (!this.props.currentUser) return null;
    console.log(this.props)

    return(
      <div>
        {/* Need an 'edit profile' <Link> */}
        <p>Account</p>
        <p>Personal info</p>

        <div className="user-username">
          <label>Username</label>
          <div>{this.props.currentUser.username}</div>
        </div>

        <div className="user-email">
          <label>Email</label>
          <div>{this.props.currentUser.email}</div>
        </div>

        <div className="user-bio">
          <label>About your dog</label>
          <div>{this.props.currentUser.bio}</div>
        </div>
      </div>
    )
  }
}

export default UserShowComponent