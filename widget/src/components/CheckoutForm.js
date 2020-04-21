import React from 'preact/compat'
import { loadStripe } from '@stripe/stripe-js'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async event => {
    event.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}

// This needs to be wrapped in Elements see - https://www.npmjs.com/package/@stripe/react-stripe-js
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh')

export { stripePromise }

export default CheckoutForm
