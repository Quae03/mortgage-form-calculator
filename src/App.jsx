import { useEffect, useState,  } from 'react';
import './components/css/App.scss';
import MortgageForm from './components/MortgageForm';
import { ParameterContext } from './components/ParameterContext';

function App() {
  // states for mortgage calculation
  const [mortgageAmt, setMortgageAmt] = useState(0);
  const [mortgageTerm, setMortgageTerm] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  
  // states to differentiate between repayment or 
  // interest only calculation
  const [isRepayment, setIsRepayment] = useState(false);
  const [isInterestOnly, setIsInterestOnly] = useState(false);

  // states for results of mortgage calculation
  const [mortgageRepayment, setMortgageRepayment] = useState(0);
  const [interestOnMortgage, setInterestOnMortgage] = useState(0);

  let [isValid, setIsValid] = useState(false);

  return (
    <main>
      <ParameterContext.Provider value={{mortgageAmt, setMortgageAmt, mortgageTerm, setMortgageTerm, interestRate, setInterestRate, 
        mortgageRepayment, setMortgageRepayment, interestOnMortgage, setInterestOnMortgage, 
        isRepayment, setIsRepayment, isInterestOnly, setIsInterestOnly, 
        isValid, setIsValid}}>
        <MortgageForm />
      </ParameterContext.Provider>
    </main>
  );
}

export default App
