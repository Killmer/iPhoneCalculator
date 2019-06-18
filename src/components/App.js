import React from 'react';
import '../css/App.css';
import IphoneX from './IphoneX';
import ReactLogo from './ReactLogo';

function App() {
  return (
    <div className="App">
      <IphoneX>
        <p>Hello React ⚛️</p>
        <ReactLogo />
      </IphoneX>
    </div>
  );
}

export default App;
