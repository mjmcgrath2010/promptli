import { useState } from 'preact/hooks'

const getIndexById = (arr, matchId) => arr.findIndex(({ id }) => id === matchId)

const useSteps = ({ steps: stepsProp, initialStep = 0 }) => {
  // Convert steps to an array if it is a number.
  const steps = typeof stepsProp === 'number' ? new Array(stepsProp).fill({}) : stepsProp
  // Compute initialStepIndex in case an id is passed vs an index.
  const initialStepIndex = typeof initialStep === 'number' ? initialStep : getIndexById(steps, initialStep)

  // Setup state.
  const [index, setStep] = useState(initialStepIndex)

  const step = steps[index]

  const deltaSetStep = (delta = 1) => {
    setStep((index + steps.length + delta) % steps.length)
  }

  // Build navigation callback functions.
  const navigation = {
    next: () => deltaSetStep(1),
    previous: () => deltaSetStep(-1),
    go: newStep => {
      if (typeof newStep === 'number') {
        setStep(newStep)
      } else {
        const newStepId = getIndexById(steps, newStep)
        setStep(newStepId)
      }
    },
  }

  return {
    index,
    step,
    navigation,
  }
}

export default useSteps