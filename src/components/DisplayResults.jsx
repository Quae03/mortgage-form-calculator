import { useContext } from "react";
import { ParameterContext } from "./ParameterContext";
import TotalMortgageCalculation from "./TotalMortgageCalculation";
import MonthlyMortgageCalculation from "./MonthlyMortgageCalculation";
import MonthlyInterestCalculation from "./MonthlyInterestCalculation";
import TotalInterestCalculation from "./TotalInterestCalculation";

export function DisplayResults() {
    // import parameters for mortgage calculation
    const {mortgageAmt} = useContext(ParameterContext);
    const {mortgageTerm} = useContext(ParameterContext);
    const {interestRate} = useContext(ParameterContext);

    const {isRepayment} = useContext(ParameterContext);
    
    return (
        <div className="wrapper">
            <section className='results-section'>
                <h1>Your Results</h1>
                <p>
                Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click “calculate repayments” again.
                </p>

                {isRepayment ? 
                <div className='results-div'>
                    <div>
                        <h2>Your monthly repayments</h2>
                        <MonthlyMortgageCalculation principal={mortgageAmt} years={mortgageTerm} annualRate={interestRate}/>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2>Total you will pay over the term</h2>
                        <TotalMortgageCalculation principal={mortgageAmt} years={mortgageTerm} annualRate={interestRate}/>
                    </div>
                </div>
                : 
                <div className='results-div'>
                    <div>
                        <h2>Your monthly interest repayments</h2>
                        <MonthlyInterestCalculation principal={mortgageAmt} annualRate={interestRate}/>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h2>Total interest you will pay over the term</h2>
                        <TotalInterestCalculation principal={mortgageAmt} years={mortgageTerm} annualRate={interestRate}/>
                    </div>
                </div>}
            </section>
        </div>
    );
}