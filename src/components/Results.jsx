import React from 'react';
import { calculateInvestmentResults } from '../util/investment';

function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);

  console.log(resultsData);

  return <div>Results</div>;
}

export default Results;
