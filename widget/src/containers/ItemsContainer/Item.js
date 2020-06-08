import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Column from '../../components/ui/Column'

const ServiceContainer = styled.div``

const Item = props => {
  const { name, description, pricingUnits, packages, id } = props
  return (
    <ServiceContainer>
      <Column>
        <h1>
          {' '}
          {name}
          {description}
          {pricingUnits}
          {packages}
        </h1>
      </Column>
    </ServiceContainer>
  )
}

Item.defaultProps = {}

Item.propTypes = {}

export default Item
