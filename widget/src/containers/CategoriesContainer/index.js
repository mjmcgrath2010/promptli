import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'
import CategorySearch from './CategorySearch'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  // Desktop Styles
  @media all and (min-width: 575px) {
  }
`

const CategoriesContainer = () => {
  const { categories } = useSelector(({ widget }) => widget)
  return (
    <Container>
      <CategorySearch />
      {categories.map(({ title, url, location: { city, state }, _id }) => (
        <CategoryCard city={city} title={title} state={state} url={url} id={_id} key={_id} />
      ))}
    </Container>
  )
}

CategoriesContainer.defaultProps = {}

CategoriesContainer.propTypes = {}

export default CategoriesContainer
