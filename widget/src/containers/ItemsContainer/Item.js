import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Column from '../../components/ui/Column'

const ServiceContainer = styled.div``

const Item = props => {
  const { name, description, pricingUnits } = props
  return (
    <ServiceContainer>
      <Column>
        <h1>{name}</h1>
        <h2> {description}</h2>
      </Column>
    </ServiceContainer>
  )
}

Item.defaultProps = {}

Item.propTypes = {}

export default Item
