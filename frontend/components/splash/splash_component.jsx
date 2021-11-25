import React from "react";

class SplashComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='splash'>
        <img className="splash-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1637799306/joe-caione-qO-PIF84Vxg-unsplash_1_croxsx.jpg"/>
        
        <div className="splash-text">
          <div>Not sure where to go?</div>
          <div>Perfect.</div>
          <div className="splash-button" onClick={() => this.props.history.push("/listings")}>
            I'm flexible
          </div>
        </div>
        
      </div>
    )
  }
}

export default SplashComponent