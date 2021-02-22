import React, { useState, useCallback } from "react";


// import { Container } from './styles';
const stepPages = [];
// console.log(questionInputs().then(resp => { stepPages.push(resp)}), 'kopaskdoas')

function DiscForms({ questions }) {
  console.log(stepPages, 'asodkasokso')

  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState({});
  const [steps, setSteps] = useState([

    { label: 'Account Details', isValid: undefined },
    { label: 'Personal Details', isValid: undefined },
    { label: 'Account Details', isValid: undefined },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const isPreviousStepsValid = steps.slice(0, step).findIndex(currentStep => currentStep.isValid === false) === -1;
  
  const onStepSubmit = (e) => {
    e.preventDefault();

    const currentSteps = steps.map((currentStep, index) => ({
      ...currentStep,
      isValid: index === step ? true : currentStep.isValid
    }));
    
    console.log(currentSteps,'te amo BB!')
    setSteps(currentSteps);
    setStep(() => Math.min(step + 1, lastStepIndex));

  }
  return (
    <form>
      {stepPages[0][step]}

      {
        step !== 0 ? (
          <button type={'button'} style={{ marginRight: '16px' }} onClick={'onPrevClick'}>
            Previous
          </button>
        ) : undefined
      }
      <button
        primary={true}
        disabled={isLastStep ? !isPreviousStepsValid : false}
        onClick={onStepSubmit}
      >
        {isLastStep ? 'Submit' : 'Next'}
      </button>
    </form>
  );
}










function Account() {

  return (
    <form>
      <label>Account</label>
      <input type={"text"} />
    </form>
  )
}
function Payment() {

  return (
    <form>
      <label>Payment</label>
      <input type={"text"} />
    </form>
  )
}
function Personal() {

  return (
    <form>
      <label>Personal</label>
      <input type={"text"} />
    </form>
  )
}
export default DiscForms;