import './css/ResultsSection.scss';

// component for calculating and storing mortgage calculation
export function DisplayEmpty() {
    return (
        <div className='wrapper'>
            <section className='results-section'>
                <img src="./src/assets/images/illustration-empty.svg" alt="" />
                <h2>Your results will be shown here</h2>
                <p>
                Your results are shown below based on the information you provided. 
                To adjust the results, edit the form and click the “calculate repayments” button again.
                </p>
            </section>
        </div>
    );
}

export default DisplayEmpty;