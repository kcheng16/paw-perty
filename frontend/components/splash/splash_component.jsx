import React from "react";

class SplashComponent extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='splash'>
        <img className="splash-img" src="https://res.cloudinary.com/de8carnhu/image/upload/v1637652353/splash-1_hruimp.jpg"/>
      </div>
    )
  }
}

export default SplashComponent