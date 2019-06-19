import React from 'react';
import '../css/App.css';
import IphoneX from './IphoneX';
import Calculator from './calculator/Calculator';
import buttons from './calculator/buttons-data';

function App() {
  return (
    <div className="App">
      <IphoneX>
        <Calculator buttons={buttons}/>
      </IphoneX>
    </div>
  );
}

export default App;
