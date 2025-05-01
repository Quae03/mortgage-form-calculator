import { createContext, useState } from "react";

export const ParameterContext = createContext();

// create context to export variables for mortgage calculation
export function ParameterProvider({children}) {
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
        <ParameterContext.Provider value={{mortgageAmt, setMortgageAmt, mortgageTerm, setMortgageTerm, interestRate, setInterestRate, 
        mortgageRepayment, setMortgageRepayment, interestOnMortgage, setInterestOnMortgage, 
        isRepayment, setIsRepayment, isInterestOnly, setIsInterestOnly, 
        isValid, setIsValid}}>
            {children}
        </ParameterContext.Provider>
    );
}