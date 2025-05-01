// component for calculating and storing monthly mortgage
function TotalMortgageCalculation({principal, years, annualRate}) { 
    const r = (annualRate / 100) / 12; // annual interest rate
    const n = years * 12;
    const monthlyPayment = (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;

    return (
        <span className="total">{totalPayment.toFixed(2)}</span>
    );
}

export default TotalMortgageCalculation;