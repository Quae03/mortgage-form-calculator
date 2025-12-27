import './css/MortgageForm.scss';
import image from '../assets/images/icon-calculator.svg';
import { useContext, useEffect } from 'react';
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

    let {isValid, setIsValid} = useContext(ParameterContext);

    // Array ref for removing styling functionality on click off
    const inputRefs = useRef([]);

    // input refs & error refs
    const mortgageAmountContainerRef = useRef();
    const mortgageAmountRef = useRef();
    const mortgageAmountDivRef = useRef();
    const mortgageAmountErrorRef = useRef();

    const mortgageTermRef = useRef();
    const mortgageTermDivRef = useRef();
    const mortgageTermErrorRef = useRef();
    
    const interestRateRef = useRef();
    const interestRateDivRef = useRef();
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
            setIsValid(false);
            mortgageAmountErrorRef.current.style.display = 'block';
            mortgageAmountErrorRef.current.textContent = 'This field is required';
        } else {
            setMortgageAmt(mortgageAmountRef.current.value.trim())
            mortgageAmountErrorRef.current.style.display = 'none';
        }

        if (!mortgageTermRef.current.value.trim()) {
            setIsValid(false);
            mortgageTermErrorRef.current.style.display = 'block';
            mortgageTermErrorRef.current.textContent = 'This field is required';
        } else {
            setMortgageTerm(mortgageTermRef.current.value.trim())
            mortgageTermErrorRef.current.style.display = 'none';
        }

        if (!interestRateRef.current.value.trim()) {
            setIsValid(false);
            interestRateErrorRef.current.style.display = 'block';
            interestRateErrorRef.current.textContent = 'This field is required';
        } else {
            setInterestRate(interestRateRef.current.value.trim())
            interestRateErrorRef.current.style.display = 'none';
        }

        if (!radio1Ref.current.checked && !radio2Ref.current.checked) {
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
        mortgageTermDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
        mortgageTermDivRef.current.style.borderLeft = 'none';
        mortgageTermDivRef.current.style.borderRight = '1px solid hsl(200, 26%, 54%)';
        mortgageTermDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
        mortgageTermDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
        interestRateRef.current.value = '';
        interestRateDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
        interestRateDivRef.current.style.borderLeft = 'none';
        interestRateDivRef.current.style.borderRight = '1px solid hsl(200, 26%, 54%)';
        interestRateDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
        interestRateDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
        radioDiv1Ref.current.style.backgroundColor = '#fff';
        radioDiv1Ref.current.style.border = '1px solid hsl(200, 26%, 54%)';
        radioDiv2Ref.current.style.backgroundColor = '#fff';
        radioDiv2Ref.current.style.border = '1px solid hsl(200, 26%, 54%)';
        radio1Ref.current.checked = false;
        radio2Ref.current.checked = false;
        isValid ? setIsValid(false) : '';
    }

    useEffect(() => {
        function handleClickOutside(event) {
            const clickedInside = inputRefs.current.some(
                ref => ref && ref.contains(event.target)
            );

            // add or remove styles depending on where the user clicks
            if (!clickedInside) {
                mortgageAmountDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                mortgageAmountDivRef.current.style.borderLeft = '1px solid hsl(200, 26%, 54%)';
                mortgageAmountDivRef.current.style.borderRight = 'none';
                mortgageAmountDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                mortgageAmountDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
                
                mortgageTermDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                mortgageTermDivRef.current.style.borderLeft = 'none';
                mortgageTermDivRef.current.style.borderRight = '1px solid hsl(200, 26%, 54%)';
                mortgageTermDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                mortgageTermDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
                
                interestRateDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                interestRateDivRef.current.style.borderLeft = 'none';
                interestRateDivRef.current.style.borderRight = '1px solid hsl(200, 26%, 54%)';
                interestRateDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                interestRateDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
            } else {
                if (inputRefs.current[0].contains(event.target)) {
                    mortgageAmountDivRef.current.style.border = '1px solid hsl(61, 70%, 52%)';
                    mortgageAmountDivRef.current.style.backgroundColor = 'hsl(61, 70%, 52%)';

                    mortgageTermDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                    mortgageTermDivRef.current.style.borderLeft = 'none';
                    mortgageTermDivRef.current.style.borderRight = '1px solid hsl(200, 26%, 54%)';
                    mortgageTermDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                    mortgageTermDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';

                    interestRateDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                    interestRateDivRef.current.style.borderLeft = 'none';
                    interestRateDivRef.current.style.borderRight = '1px solid hsl(200, 26%, 54%)';
                    interestRateDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                    interestRateDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
                    return
                } if (inputRefs.current[1].contains(event.target)) {
                    mortgageTermDivRef.current.style.border = '1px solid hsl(61, 70%, 52%)';
                    mortgageTermDivRef.current.style.backgroundColor = 'hsl(61, 70%, 52%)';

                    mortgageAmountDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                    mortgageAmountDivRef.current.style.borderLeft = '1px solid hsl(200, 26%, 54%)';
                    mortgageAmountDivRef.current.style.borderRight = 'none';
                    mortgageAmountDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                    mortgageAmountDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';

                    interestRateDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                    interestRateDivRef.current.style.borderLeft = 'none';
                    interestRateDivRef.current.style.borderRight = '1px solid hsl(200, 26%, 54%)';
                    interestRateDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                    interestRateDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
                    return
                }
                if (inputRefs.current[2].contains(event.target)) {
                    interestRateDivRef.current.style.border = '1px solid hsl(61, 70%, 52%)';
                    interestRateDivRef.current.style.backgroundColor = 'hsl(61, 70%, 52%)';
                    
                    mortgageAmountDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                    mortgageAmountDivRef.current.style.borderLeft = '1px solid hsl(200, 26%, 54%)';
                    mortgageAmountDivRef.current.style.borderRight = 'none';
                    mortgageAmountDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                    mortgageAmountDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
                    
                    mortgageTermDivRef.current.style.borderTop = '1px solid hsl(200, 26%, 54%)';
                    mortgageTermDivRef.current.style.borderLeft = 'none';
                    mortgageTermDivRef.current.style.borderRight = '1px solid hsl(200, 26%, 54%)';
                    mortgageTermDivRef.current.style.borderBottom = '1px solid hsl(200, 26%, 54%)';
                    mortgageTermDivRef.current.style.backgroundColor = 'hsl(202, 86%, 94%)';
                    return
                }
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function styleRadioDiv() {
        if (radio1Ref.current.checked) {
            radioDiv1Ref.current.style.border = '1px solid hsl(61, 70%, 52%)';
            radioDiv1Ref.current.style.backgroundColor = 'hsl(61, 70%, 52%, 0.2)';
            radioDiv1Ref.current.style.border = '1px solid hsl(61, 70%, 52%)';
            radio1Ref.current.style.border = '1px solid hsl(61, 70%, 52%)';
            radio1Ref.current.style.backgroundColor = 'hsl(61, 70%, 52%)';
            
            radioDiv2Ref.current.style.border = '1px solid hsl(202, 55%, 16%, 0.5)';
            radioDiv2Ref.current.style.backgroundColor = '#fff';
            radio2Ref.current.style.backgroundColor = '#fff';
            radio2Ref.current.style.border = '1px solid hsl(202, 55%, 16%)';

            // remove error message if user complies with radio selection
            radioErrorRef.current.textContent = '';
            radioErrorRef.current.style.display = 'none';
        }
        if (radio2Ref.current.checked) {
            radioDiv2Ref.current.style.border = '1px solid hsl(61, 70%, 52%)';
            radioDiv2Ref.current.style.backgroundColor = 'hsl(61, 70%, 52%, 0.2)';
            radioDiv2Ref.current.style.border = '1px solid hsl(61, 70%, 52%)';
            radio2Ref.current.style.border = '1px solid hsl(61, 70%, 52%)';
            radio2Ref.current.style.backgroundColor = 'hsl(61, 70%, 52%)';

            radioDiv1Ref.current.style.border = '1px solid hsl(202, 55%, 16%, 0.5)';
            radioDiv1Ref.current.style.backgroundColor = '#fff';
            radioDiv1Ref.current.style.border = '1px solid hsl(202, 55%, 16%, 0.5)';
            radio1Ref.current.style.backgroundColor = '#fff';
            radio1Ref.current.style.border = '1px solid hsl(202, 55%, 16%)';

            // remove error message if user complies with radio selection
            radioErrorRef.current.textContent = '';
            radioErrorRef.current.style.display = 'none';
        }
    }

    return (
        <>
        <div className='wrapper'>
            <section className='calculation-section'>
                <header>
                    <h2>Mortgage Calculator</h2>
                    <button onClick={clearAll} className='clear-all'>Clear All</button>
                </header>

                <form onSubmit={handleSubmit}>
                    
                    <label htmlFor="mortgageAmount">Mortgage Amount
                        <div ref={mortgageAmountContainerRef}>
                            <div ref={el => inputRefs.current[0] = el} id='mortgageAmountContainer'>
                                <div ref={mortgageAmountDivRef} className='input-div'><strong>&euro;</strong></div>
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
                            </div>
                        </div>
                        <span ref={mortgageAmountErrorRef} id='mortgageAmountError' className='error'></span>
                    </label>

                    <div className='term-and-rate'>
                        <div>
                            <label htmlFor="mortgageTerm">Mortgage Term</label>
                            <div ref={el => inputRefs.current[1] = el} className='input-group'>
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
                                step='0.1'
                                min={1}
                                />
                                <div ref={mortgageTermDivRef}><strong>years</strong></div>
                            </div>
                            <span ref={mortgageTermErrorRef} id='mortgageTermError' className='error'></span>
                        </div>
                        <div>
                            <label htmlFor="interestRate">Interest Rate</label>
                            <div ref={el => inputRefs.current[2] = el} className='input-group'>
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
                                    step='0.01'
                                    min={1}
                                    />
                                    <div ref={interestRateDivRef}><strong>%</strong></div>
                            </div>
                            <span ref={interestRateErrorRef} id='interestRateError' className='error'></span>
                        </div>
                    </div>

                    <div className='mortgage-type'>
                        <p className='mortgage-type-label'>Mortgage Type</p>
                        
                        <div ref={radioDiv1Ref} id='radioDiv1' className='radio-div'>
                            <div id='radioContainer1Ref'>
                                <div></div>
                                <input 
                                onChange={styleRadioDiv} 
                                ref={radio1Ref} 
                                id='radio1'
                                className='custom-radio' 
                                type="radio" name='radio' 
                                value='Repayment'
                                />
                            </div>
                            <p htmlFor='radio1' className='radio-text'><strong>Repayment</strong></p>
                        </div>

                        <div ref={radioDiv2Ref} id='radioDiv2' className='radio-div'>
                            <input 
                            onChange={styleRadioDiv} 
                            ref={radio2Ref}
                            id='radio2' 
                            className='custom-radio' 
                            type="radio" 
                            name='radio' 
                            value='Interest Only'
                            />
                            <p htmlFor='radio2' className='radio-text'><strong>Interest Only</strong></p>
                        </div>

                        <span ref={radioErrorRef} id='radioError' className='error'></span>
                    </div>

                    <button className='submit' ref={submitRef}>
                        <img src={image} alt="calculator image" />
                        <strong>Calculate Repayments</strong>
                    </button>
                </form>
            </section>
        </div>
        {!isValid ? <DisplayEmpty /> : <DisplayResults />}
        </>
    );
}

export default MortgageForm;