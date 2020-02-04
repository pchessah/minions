import React, { Component } from 'react';
import Sky from 'react-sky';
import Background2 from './Background2';


 class Background extends Component {
  render() {
    return (
      <div className="animation">
        <h1> Cows will fly !</h1>
        <Sky className ="animation2"
          images={{
            /* FORMAT AS FOLLOWS */
            /* You can pass as many images as you want */
            0: "https://i.pinimg.com/564x/35/38/af/3538af6688589264fbc092aa7273d6e0.jpg",
     1: "https://scontent.febb3-1.fna.fbcdn.net/v/t1.0-9/s960x960/81409704_1412775395567146_8758466295491461120_o.jpg?_nc_cat=105&_nc_ohc=Qib8n-vQ6dAAX_9IKV4&_nc_ht=scontent.febb3-1.fna&oh=36077f5b9963b3602ef621adc23d922c&oe=5E910DA7"
     
            
           
            
         
          }}
          how={50} /* Pass the number of images Sky will render chosing randomly */
          time={150} /* time of animation */
          size={'30px'} /* size of the rendered images */
          background={`url(${"https://images.wallpaperscraft.com/image/abstraction_patterns_dots_74033_1280x1024.jpg"})`} /* color of background */
        />

        {/* <button> Page Two of animation </button> */}
        
      </div>
    )
  }
}

export default Background;
