import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  // Desktop Styles
  @media all and (min-width: 575px) {
  }
`

const CategoriesContainer = props => {
  const { categories } = useSelector(({ widget }) => widget)
  return (
    <Container>
      {categories.map(({ title, url, location: { city, state } }) => (
        <CategoryCard city={city} title={title} state={state} />
      ))}
    </Container>
  )
}

CategoriesContainer.defaultProps = {}

CategoriesContainer.propTypes = {}

export default CategoriesContainer
