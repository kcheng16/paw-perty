import React from "react";
import { Link } from "react-router-dom";

class SplashComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='splash'>
        <div className="splash-img-container">
          <img className="splash-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1637799306/joe-caione-qO-PIF84Vxg-unsplash_1_croxsx.jpg"/>
        </div>
        
        <div className="splash-text">
          <div>Not sure where to go?</div>
          <div>Perfect.</div>
          <div className="splash-button" onClick={() => this.props.history.push("/listings")}>
            I'm flexible
          </div>
        </div>
        <h1 className="inspiration-header">Inspiration for your next trip</h1>
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
        
        <div className="super-host-container">
          <img 
            className="super-host-img"
            src="https://res.cloudinary.com/de8carnhu/image/upload/v1641684228/Dalmatian-superhero-1-960x540_kt3apu.jpg"/>
          <div className="super-host-text">
            <div>What's your</div>
            <div>super paw-er?</div>
            <Link to={"/listings/new"}>Become a super host!</Link>
          </div>
        </div>

        <div className="splash-footer-container">
          <div className="social">
            <div className="footer-title">Social</div>
            <div className="links">
              <a href="https://www.linkedin.com/in/kcheng16/">
                <img className="link-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/linkedinbutton_r8xeco.png"/>
              </a>
              <a href="https://github.com/kcheng16">
                <img className="link-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1638510015/githubicon_w6ympq.png"/>
              </a>
              <a href="https://angel.co/u/kcheng16">
                <img className="link-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1641681845/angellist-icon_kgfh2a.png"/>
              </a>
              {/* PORTFOLIO LINK
              <a href="">
                <img className="link-img" src=""/>
              </a> */}
            </div>
          </div>

          <div className="contact">
            <div className="footer-title">Contact</div>
            <div className="info">
              <div>Kenny Cheng</div>
              <div>kcheng16@gmail.com</div>
              <div>510-674-6668</div>
              <div>San Francisco Bay Area, CA</div>
            </div>
          </div>

          <div className="projects">
            <div className="footer-title">Projects</div>
            <a href="https://code-op.herokuapp.com/">
              <div>Code-Op</div>
              <div>Software programming project collaboration and management application</div>
            </a>
            <a href="https://kcheng16.github.io/cho-plate-project/">
              <div>Build-CHO-Plate</div>
              <div>Interactive game exploring fundamentals of carbohydrate counting for diabetic management</div>
            </a>
            <a href=""></a>
          </div>

          <div className="tech">
            <div className="footer-title">Technologies</div>
            <div className="tech-grid">
              <div>Amazon Web Services (AWS)</div>
              <div>CSS</div>
              <div>Git</div>
              <div>Google Maps</div>
              <div>HTML</div>
              <div>JavaScript</div>
              <div>jQuery</div>
              <div>PostgreSQL</div>
              <div>React</div>
              <div>Redux</div>
              <div>Ruby</div>
              <div>Ruby on Rails</div>
              <div>Sass</div>
              <div>Webpack</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default SplashComponent