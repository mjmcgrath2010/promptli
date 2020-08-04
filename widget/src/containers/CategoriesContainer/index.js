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

const ItemsContainer = styled(Container)`
  background: rgb(74, 144, 226);
  min-height: 100vh;
  background: linear-gradient(
    125deg,
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
    <ItemsContainer>
      <Row>
        <Column>
          <CategoriesHeader title="Department of Conservation & Recreation (DCR)" service={'Parking'} />
          <CategorySearch />
        </Column>
      </Row>
      <Row>
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
      </Row>
    </ItemsContainer>
  )
}

CategoriesContainer.defaultProps = {}

CategoriesContainer.propTypes = {}

export default CategoriesContainer
