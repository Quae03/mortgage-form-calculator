// component for calculating and storing monthly mortgage
function MonthlyMortgageCalculation({principal, years, annualRate}) { 
    const r = (annualRate / 100) / 12; // annual interest rate
    const n = years * 12;
    const monthlyPayment = (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

    return (
        <span className="monthly-repayments">{monthlyPayment.toFixed(2)}</span>
    );
}

export default MonthlyMortgageCalculation;