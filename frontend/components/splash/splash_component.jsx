import React from "react";
import { Link } from "react-router-dom";

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
        <h1>Inspiration for your next trip</h1>
        <div className="splash-inspiration-container">
          <Link className="boring" to={"/search/BORING"}>
            <div className="inspiration-img"></div>
            <h3>Boring</h3>
            <h5>Oregon</h5>
          </Link>
          <Link className="okay" to={"/search/OKAY"}>
            <div className="inspiration-img"></div>
            <h3>Okay</h3>
            <h5>Oklahoma</h5>
          </Link>
          <Link className="flippen" to={"/search/FLIPPEN"}>
            <div className="inspiration-img"></div>
            <h3>Flippen</h3>
            <h5>Georgia</h5>
          </Link>
          <Link className="dummer" to={"/search/DUMMER"}>
            <div className="inspiration-img"></div>
            <h3>Dummer</h3>
            <h5>New Hampshire</h5>
          </Link>
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