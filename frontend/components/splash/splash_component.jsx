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

        <div className="splash-inspiration-container">
          <div className="boring">
            <div className="inspiration-img"></div>
            <h3>Boring</h3>
            <h5>Oregon</h5>
          </div>
          <div className="okay">
            <div className="inspiration-img"></div>
            <h3>Okay</h3>
            <h5>Oklahoma</h5>
          </div>
          <div className="flippen">
            <div className="inspiration-img"></div>
            <h3>Flippen</h3>
            <h5>Georgia</h5>
          </div>
          <div className="dummer">
            <div className="inspiration-img"></div>
            <h3>Dummer</h3>
            <h5>New Hampshire</h5>
          </div>
        </div>
        
        <div className="social">
          <a href="https://www.linkedin.com/in/kcheng16/">
            <img className="linked-in" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/linkedinbutton_r8xeco.png"/>
          </a>

          <a href="https://github.com/kcheng16">
            <img className="github" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/githubicon_w6ympq.png"/>
          </a>
        </div>
      </div>
    )
  }
}

export default SplashComponent