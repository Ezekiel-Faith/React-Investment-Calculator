import React from 'react';
import Header from './components/Header';
import headerImg from './assets/investment-calculator-logo.png';

function App() {
  return (
    <div>
      <Header img={headerImg} headerText='Investment Calculator' />
    </div>
  );
}

export default App;
