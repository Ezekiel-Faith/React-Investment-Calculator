import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <div>
      <Header />
      <UserInput userInput={input} onChangeInput={handleChange} />
      <Results userInput={input} />
    </div>
  );
}

export default App;
