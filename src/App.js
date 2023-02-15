import React from 'react';
import './App.css';

function App() {

  const [mode, setMode] = React.useState(true)

  function changeMode(){
    setMode(function (prevMode){
      return prevMode = !prevMode
    })
  }


  return (
    <div className='app' style={{ background: mode ?'#FFFFFF' : '#000000'}}>
      <h1 style={{ color: mode ? '#000000' : '#FFFFFF'}}>{ mode ? "Light Mode" : "Dark Mode"}</h1>
      <button
        onClick={changeMode} 
        style={{ border: mode ? '1px solid black' : '1px solid white',
                  color: mode ? 'black' : 'white'}} >
        { mode ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default App;
