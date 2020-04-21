import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ServiceContainer = styled.div``

const Service = props => {
  const { title } = props
  return <ServiceContainer>{title}</ServiceContainer>
}

Service.defaultProps = {}

Service.propTypes = {}

export default Service
