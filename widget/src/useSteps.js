import { useState } from 'preact/hooks'

const getIndexById = (arr, matchId) => arr.findIndex(({ id }) => id === matchId)

const useSteps = ({ steps: stepsProp, initialStep = 0 }) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!Array.isArray(stepsProp) && !Number.isInteger(stepsProp)) {
      error('useStep: You must specify either an array or an integer for `steps`')
    }
  }
  // Convert steps to an array if it is a number.
  const steps = typeof stepsProp === 'number' ? new Array(stepsProp).fill({}) : stepsProp
  // Compute initialStepIndex in case an id is passed vs an index.
  const initialStepIndex = typeof initialStep === 'number' ? initialStep : getIndexById(steps, initialStep)

  if (process.env.NODE_ENV !== 'production') {
    if (typeof initialStep === 'string' && initialStepIndex === -1) {
      error(`useStep: id of "${initialStep}" specified in initialStep not found in steps`)
    }
  }
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
        if (process.env.NODE_ENV !== 'production') {
          if (newStep < 0 || newStep > steps.length) {
            error(`useStep: Index out of range in go(${newStep})`)
          }
        }
        setStep(newStep)
      } else {
        const newStepId = getIndexById(steps, newStep)
        if (process.env.NODE_ENV !== 'production') {
          if (newStepId === -1) {
            error(`useStep: go("${newStep}") not found in steps`)
          }
        }
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
