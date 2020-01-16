import React from 'react';
import Props from './components/Props'
import State from './components/State'
import Events from './components/Events';
import Background from './components/Background';
function App(props) {
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn){
    return (
      <div>
        <Background/>
      </div>
    )
  }
  return <State />
  
    
  
}
// setInterval(App, 2000)

export default App;
