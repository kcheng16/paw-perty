import React from "react";

class SplashComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='splash'>
        <img className="splash-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1637778888/splashpage_a5bq4v.jpg"/>
          <div className="splash-button" onClick={() => this.props.history.push("/listings")}>
            <h1>I'm flexible</h1>
          </div>
      </div>
    )
  }
}

export default SplashComponent