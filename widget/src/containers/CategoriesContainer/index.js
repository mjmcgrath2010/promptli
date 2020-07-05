import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'
import CategorySearch from './CategorySearch'
import CategoriesHeader from './CategoriesHeader'
import { setActiveCategory } from '../../actions/categories/actionCreators'
import { setActiveContainer } from '../../actions/widget/actionCreators'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: rgb(74, 144, 226);
  background: linear-gradient(
    130deg,
    rgba(74, 144, 226, 1) 0%,
    rgba(74, 144, 226, 1) 35%,
    rgba(255, 255, 255, 1) 35%,
    rgba(255, 255, 255, 1) 100%
  );
  // Desktop Styles
  @media all and (min-width: 575px) {
  }
`

const CategoriesContainer = ({ navigation }) => {
  const { filteredCategories } = useSelector(({ categories }) => categories)
  const dispatch = useDispatch()
  const selectCategory = category => {
    dispatch(setActiveCategory(category))
    navigation.next()
  }
  return (
    <Container>
      <CategoriesHeader title="Department of Conservation & Recreation (DCR)" service={'Parking'} />
      <CategorySearch />
      {filteredCategories.map(category => {
        const {
          title,
          image,
          location: { city, state },
          _id,
        } = category
        return (
          <CategoryCard
            city={city}
            title={title}
            state={state}
            image={image}
            id={_id}
            key={_id}
            onClick={() => selectCategory(category)}
          />
        )
      })}
    </Container>
  )
}

CategoriesContainer.defaultProps = {}

CategoriesContainer.propTypes = {}

export default CategoriesContainer
