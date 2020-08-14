import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'
import CategorySearch from './CategorySearch'
import CategoriesHeader from './CategoriesHeader'
import { setActiveCategory } from '../../actions/categories/actionCreators'
import Container from '../../components/ui/Container'
import Row from '../../components/ui/Row'
import Column from '../../components/ui/Column'

const StyledContainer = styled(Container)`
  min-height: 100vh;
  // Desktop Styles
  @media all and (min-width: 575px) {
  }
`

const SearchContainer = styled(Row)`
  position: sticky;
  background: rgb(74, 144, 226);
  background: linear-gradient(
    145deg,
    rgba(74, 144, 226, 1) 0%,
    rgba(74, 144, 226, 1) 25%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 1) 100%
  );
  top: 0;
`

const Categories = styled(Row)`
  overflow: scroll;
`

const CategoriesContainer = ({ navigation }) => {
  const { filteredCategories } = useSelector(({ categories }) => categories)
  const dispatch = useDispatch()
  const selectCategory = category => {
    dispatch(setActiveCategory(category))
    navigation.next()
  }
  return (
    <StyledContainer>
      <SearchContainer>
        <Column>
          <CategoriesHeader title="Department of Conservation & Recreation (DCR)" service={'Parking'} />
          <CategorySearch />
        </Column>
      </SearchContainer>
      <Categories>
        <Column>
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
        </Column>
      </Categories>
    </StyledContainer>
  )
}

CategoriesContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CategoriesContainer
