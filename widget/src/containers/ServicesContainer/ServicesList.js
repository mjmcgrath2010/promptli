import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ServiceListContainer = styled.div``

const ServiceList = props => {
  const { title } = props
  return <ServiceListContainer>{title}</ServiceListContainer>
}

ServiceList.defaultProps = {}

ServiceList.propTypes = {}

export default ServiceList
