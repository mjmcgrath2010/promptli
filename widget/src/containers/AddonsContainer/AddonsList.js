import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AddonListContainer = styled.div``

const AddonList = props => {
  const { title } = props
  return <AddonListContainer>{title}</AddonListContainer>
}

AddonList.defaultProps = {}

AddonList.propTypes = {}

export default AddonList
