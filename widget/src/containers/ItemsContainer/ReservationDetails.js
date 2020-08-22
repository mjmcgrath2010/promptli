import { h } from 'preact'
import { useState } from 'preact/hooks'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ReservationDetails = props => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    vehicle: {
      plateNumber: '',
      color: '',
      make: '',
      model: '',
    },
  })

  return (
    <div>
      <h3>Reservation Details</h3>
    </div>
  )
}

ReservationDetails.defaultProps = {}
ReservationDetails.propTypes = {}

export default ReservationDetails
