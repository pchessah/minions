import React, { Component } from 'react';
import Sky from 'react-sky';


export default class Background extends Component {
  render() {
    return (
      <div className="animation">
        <h1> Cows will fly !</h1>
        <Sky className ="animation2"
          images={{
            /* FORMAT AS FOLLOWS */
            /* You can pass as many images as you want */
            0: "https://i.pinimg.com/564x/35/38/af/3538af6688589264fbc092aa7273d6e0.jpg",
           
            
         
          }}
          how={50} /* Pass the number of images Sky will render chosing randomly */
          time={100} /* time of animation */
          size={'50px'} /* size of the rendered images */
          background={`url(${"https://images.wallpaperscraft.com/image/abstraction_patterns_dots_74033_1280x1024.jpg"})`} /* color of background */
        />
        
      </div>
    )
  }
}
