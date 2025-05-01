// component for calculating and storing interest on mortgage
function TotalInterestCalculation({principal, years, annualRate}) { 
    const monthlyInterest = (principal * (annualRate / 100)) / 12;

    const totalInterest = monthlyInterest * (years * 12);

    return (
        <span className="total">{totalInterest.toFixed(2)}</span>
    );
}

export default TotalInterestCalculation;