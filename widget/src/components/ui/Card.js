import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardContainer = styled.div``

const Card = props => {
  const { title, primaryBtnText, secondaryBtnText, image, primaryAction, secondaryAction } = props

  return <CardContainer></CardContainer>
}

Card.defaultProps = {
  secondaryBtnText: undefined,
  image: '',
  secondaryAction: () => {},
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  primaryBtnText: PropTypes.string.isRequired,
  secondaryBtnText: PropTypes.string,
  image: PropTypes.string,
  primaryAction: PropTypes.func.isRequired,
  secondaryAction: PropTypes.func,
}

export default Card
