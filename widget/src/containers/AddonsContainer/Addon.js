import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AddonContainer = styled.div``

const Addon = props => {
  const { title } = props
  return (
    <AddonContainer>
      <h1>{title}</h1>
    </AddonContainer>
  )
}

Addon.defaultProps = {}

Addon.propTypes = {}

export default Addon
