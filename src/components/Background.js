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
            0: "https://cdn.vox-cdn.com/thumbor/WniJ_Qj9OiBjo4vDUnsEvOxNo3E=/0x0:2842x1470/1200x800/filters:focal(1209x317:1663x771)/cdn.vox-cdn.com/uploads/chorus_image/image/53961067/bossbabycover.0.jpg",
    
     
     
            
           
            
         
          }}
          how={50} /* Pass the number of images Sky will render chosing randomly */
          time={150} /* time of animation */
          size={'30px'} /* size of the rendered images */
          background={`url(${"https://images.pexels.com/photos/39388/chihuahua-dog-puppy-cute-39388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})`} /* color of background */
        />

        {/* <button> Page Two of animation </button> */}
        
      </div>
    )
  }
}

export default Background;
