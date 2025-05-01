import './css/MortgageForm.scss';
import { useContext } from 'react';
import { useRef } from 'react';
import { ParameterContext } from './ParameterContext';
import DisplayEmpty from './DisplayEmpty';
import { DisplayResults } from './DisplayResults';

// component for validating form input
function MortgageForm() {
    // import parameters for mortgage calculation
    const {setMortgageAmt} = useContext(ParameterContext);
    const {setMortgageTerm} = useContext(ParameterContext);
    const {setInterestRate} = useContext(ParameterContext);

    const {setIsRepayment} = useContext(ParameterContext);
    const {setIsInterestOnly} = useContext(ParameterContext);

    const {isValid, setIsValid} = useContext(ParameterContext);

    // input refs & error refs
    const formRef = useRef();

    const mortgageAmountRef = useRef();
    const mortgageAmountErrorRef = useRef();

    const mortgageTermRef = useRef();
    const mortgageTermErrorRef = useRef();
    
    const interestRateRef = useRef();
    const interestRateErrorRef = useRef();

    const radioDiv1Ref = useRef();
    const radioDiv2Ref = useRef();
    const radio1Ref = useRef();
    const radio2Ref = useRef();
    const radioErrorRef = useRef();

    const submitRef = useRef();

    // validate input and radio selection
    const handleSubmit = (e) => {
        e.preventDefault();

        setIsValid(true);
        setIsRepayment(false);
        setIsInterestOnly(false);

        if (!mortgageAmountRef.current.value.trim()) {
            e.preventDefault();
            setIsValid(false);
            mortgageAmountErrorRef.current.style.display = 'block';
            mortgageAmountErrorRef.current.textContent = 'This field is required';
        } else {
            setMortgageAmt(mortgageAmountRef.current.value.trim())
            mortgageAmountErrorRef.current.style.display = 'none';
        }

        if (!mortgageTermRef.current.value.trim()) {
            e.preventDefault();
            setIsValid(false);
            mortgageTermErrorRef.current.style.display = 'block';
            mortgageTermErrorRef.current.textContent = 'This field is required';
        } else {
            setMortgageTerm(mortgageTermRef.current.value.trim())
            mortgageTermErrorRef.current.style.display = 'none';
        }

        if (!interestRateRef.current.value.trim()) {
            e.preventDefault();
            setIsValid(false);
            interestRateErrorRef.current.style.display = 'block';
            interestRateErrorRef.current.textContent = 'This field is required';
        } else {
            setInterestRate(interestRateRef.current.value.trim())
            interestRateErrorRef.current.style.display = 'none';
        }

        if (!radio1Ref.current.checked && !radio2Ref.current.checked) {
            e.preventDefault();
            setIsValid(false);
            radioErrorRef.current.style.display = 'block';
            radioErrorRef.current.textContent = 'Click an option';
        } else {
            radio1Ref.current.checked ? setIsRepayment(true) : setInterestRate(true)
            radioErrorRef.current.style.display = 'none';
        }
    }

    function clearAll() {
        mortgageAmountRef.current.value = '';
        mortgageTermRef.current.value = '';
        interestRateRef.current.value = '';
        radioDiv1Ref.current.style.backgroundColor = '#fff';
        radioDiv1Ref.current.style.border = '1px solid #333';
        radioDiv2Ref.current.style.backgroundColor = '#fff';
        radioDiv2Ref.current.style.border = '1px solid #333';
        radio1Ref.current.checked = false;
        radio2Ref.current.checked = false;
        isValid ? isValid = false : '';
    }

    function styleRadioDiv() {
        if (radio1Ref.current.checked) {
            radioDiv1Ref.current.style.backgroundColor = 'rgb(233, 255, 190)';
            radioDiv1Ref.current.style.border = '1px solid rgb(101, 129, 44)';
            radio1Ref.current.style.border = '2px solid #fff';
            radioDiv2Ref.current.style.backgroundColor = '#fff';
            radioDiv2Ref.current.style.border = '1px solid #333';
            // remove error message if user complies with radio selection
            radioErrorRef.current.textContent = '';
            radioErrorRef.current.style.display = 'none';
        }
        if (radio2Ref.current.checked) {
            radioDiv2Ref.current.style.backgroundColor = 'rgb(233, 255, 190)';
            radioDiv2Ref.current.style.border = '1px solid rgb(101, 129, 44)';
            radio2Ref.current.style.border = '2px solid #fff';
            radioDiv1Ref.current.style.backgroundColor = '#fff';
            radioDiv1Ref.current.style.border = '1px solid #333';
            // remove error message if user complies with radio selection
            radioErrorRef.current.textContent = '';
            radioErrorRef.current.style.display = 'none';
        }
    }

    function handleAllRadioChanges() {
        styleRadioDiv;
    }

    return (
        <>
        <div className='wrapper'>
            <section className='calculation-section'>
                <header>
                    <h1>Mortgage Calculator</h1>
                    <button onClick={clearAll} className='clear-all'>Clear All</button>
                </header>

                <form ref={formRef} onSubmit={handleSubmit}>
                    
                    <label htmlFor="mortgageAmount">Mortgage Amount
                        <input 
                        onChange={(e) => setMortgageAmt(parseInt(e.target.value))} 
                        onInput={()=>{ 
                            if (mortgageAmountRef.current.value) {
                                mortgageAmountErrorRef.current.textContent = '';
                                mortgageAmountErrorRef.current.style.display = 'none';
                            }
                        }}
                        ref={mortgageAmountRef} 
                        id='mortgageAmount' 
                        type="number"
                        min={1}
                        />
                        <span ref={mortgageAmountErrorRef} id='mortgageAmountError' className='error'></span>
                    </label>

                    <div className='term-and-rate'>
                        <label htmlFor="mortgageTerm">Mortgage Term
                            <input 
                            onChange={(e) => setMortgageTerm(parseInt(e.target.value))} 
                            onInput={()=>{ 
                                if (mortgageTermRef.current.value) {
                                    mortgageTermErrorRef.current.textContent = '';
                                    mortgageTermErrorRef.current.style.display = 'none';
                                }
                            }}
                            ref={mortgageTermRef} 
                            id='mortgageTerm' 
                            type="number"
                            min={1}
                            />
                            <span ref={mortgageTermErrorRef} id='mortgageTermError' className='error'></span>
                        </label>

                        <label htmlFor="interestRate">Interest Rate
                            <input 
                            onChange={(e) => setInterestRate(parseInt(e.target.value))} 
                            onInput={()=>{ 
                                if (interestRateRef.current.value) {
                                    interestRateErrorRef.current.textContent = '';
                                    interestRateErrorRef.current.style.display = 'none';
                                }
                            }}
                            ref={interestRateRef} 
                            id='interestRate' 
                            type="number"
                            min={1}
                            />
                            <span ref={interestRateErrorRef} id='interestRateError' className='error'></span>
                        </label>
                    </div>

                    <div className='mortgage-type'>
                        <p className='mortgage-type-label'>Mortgage Type</p>
                        
                        <div ref={radioDiv1Ref} className='radio-div'>
                            <input 
                            onChange={styleRadioDiv} 
                            ref={radio1Ref} 
                            id='radio1'
                            className='custom-radio' 
                            type="radio" name='radio' 
                            value='Repayment'
                            />
                            <label htmlFor='radio1' className='radio-text'>Repayment</label>
                        </div>

                        <div ref={radioDiv2Ref} className='radio-div'>
                            <input 
                            onChange={styleRadioDiv} 
                            ref={radio2Ref} 
                            id='radio2' 
                            className='custom-radio' 
                            type="radio" 
                            name='radio' 
                            value='Interest Only'
                            />
                            <label htmlFor='radio2' className='radio-text'>Interest Only</label>
                        </div>

                        <span ref={radioErrorRef} id='radioError' className='error'></span>
                    </div>

                    <input className='submit' ref={submitRef} type="submit" value='Calculate Repayments' />
                </form>
            </section>
        </div>
        {!isValid ? <DisplayEmpty /> : <DisplayResults />}
        </>
    );
}

export default MortgageForm;