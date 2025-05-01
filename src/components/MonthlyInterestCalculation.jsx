// component for calculating and storing interest on mortgage
function MonthlyInterestCalculation({principal, annualRate}) { 
    const monthlyInterest = (principal * (annualRate / 100)) / 12;

    return (
        <span className="monthly-repayments">{monthlyInterest.toFixed(2)}</span>
    );
}

export default MonthlyInterestCalculation;