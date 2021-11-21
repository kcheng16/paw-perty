import React from "react"

class UserShowComponent extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  render(){

    if (!this.props.currentUser) return null;

    return(
      <div>
        <h2>Hi, I'm {this.props.currentUser.username}</h2>
        {/* Need an 'edit profile' <Link> */}
        <h5>Joined in {this.props.currentUser.created_at}</h5>

        <div class='about'>
          <h2>About</h2>
          <h5>{this.props.currentUser.bio}</h5>
        </div>
      </div>
    )
  }
}

export default UserShowComponent