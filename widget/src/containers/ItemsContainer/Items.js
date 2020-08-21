import { h } from 'preact'
import PropTypes from 'prop-types'
import { useState } from 'preact/hooks'
import styled, { css, keyframes } from 'styled-components'
import DateTimePicker from '../../components/ui/DateTimeSelector'
import Button from '../../components/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../../actions/items/actionCreators'
import Column from '../../components/ui/Column'
import ItemsList from './ItemsList'
import BackIcon from '../../components/ui/BackIcon'

const ItemsContainer = styled.div`
  display: grid;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  background: ${({ image }) => `url(${image})`} center no-repeat;
  background-size: cover;
`
const Hero = styled.div`
  grid-column: span 1;
  height: 50vh;
  transition: 0.5s ease all;
  ${({ itemsVisible }) =>
    itemsVisible &&
    css`
      height: 20vh;
      transition: 0.5s ease all;
    `}
`

const HeroBody = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`

const CategoryTitle = styled.div`
  grid-column: span 12;
  padding: 1em;
  text-align: left;
  color: #ffffff;
  font-size: 24px;
`

const SearchContainer = styled.div`
  grid-column: span 1;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  background-color: #f8f9fb;
  width: 100%;
  margin: -2em auto 0;
  height: 50vh;
  transition: 0.5s ease all;
  border-radius: 26px 26px 0 0;
  ${({ itemsVisible }) =>
    itemsVisible &&
    css`
      height: 80vh;
      transition: 0.5s ease all;
    `};
  padding: 1em 0;
`

const Divider = styled.div`
  width: 80px;
  border-bottom: 4px solid #dbdbdb;
  margin: 0 auto 2em;
  border-radius: 2px;
`

const SearchBarContainer = styled.div`
  grid-column: span 1;
  grid-row: span 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 1em 0.5em;
  width: 90%;
  margin: 0 auto;
`

const ButtonContainer = styled.div`
  grid-column: span 12;
  text-align: center;
  margin-top: 22px;
`

const SearchButton = styled(Button)`
  width: 90%;
  background-color: #388557;
  border-radius: 22px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  font-size: 14px;
  padding: 0.75em;
`

const Items = props => {
  const { navigation, containerNavigation } = props
  const [dateRange, setDateRange] = useState({})
  const dispatch = useDispatch()
  const category = useSelector(({ categories }) => categories.activeCategory._id)
  const items = useSelector(({ items }) => items.items)

  const {
    title,
    image = '//picsum.photos/200',
    location: { city, state },
  } = useSelector(({ categories }) => categories.activeCategory)

  const handleDateChange = val => {
    setDateRange(prevState => ({ ...prevState, ...val }))
  }

  const getItems = () => {
    // Set loading spinner
    dispatch(fetchItems({ ...dateRange, category }))
    // Clear loading spinner
  }

  // onClick Handler for selecting an item(s)
  const onItemSelect = () => {}

  // Set list of selected items in redux store
  // Advance UI to the checkout container
  const confirmAndCheckout = () => {}
  const itemsVisible = !!items.length
  return (
    <ItemsContainer image={image}>
      <Hero start={6} end={2} itemsVisible={itemsVisible}>
        <HeroBody>
          <BackIcon onClick={() => containerNavigation.previous()} />
          <CategoryTitle>{title}</CategoryTitle>
          <CategoryTitle>
            {city}, {state}
          </CategoryTitle>
        </HeroBody>
      </Hero>
      <SearchContainer start={6} end={10} itemsVisible={itemsVisible}>
        <Divider />
        <SearchBarContainer>
          <DateTimePicker {...dateRange} onChange={handleDateChange} />
          <ButtonContainer>
            <SearchButton onClick={getItems} text="Search For Parking" />
          </ButtonContainer>
        </SearchBarContainer>
        <Column>
          <ItemsList containerNavigation={containerNavigation} navigation={navigation} />
        </Column>
      </SearchContainer>
    </ItemsContainer>
  )
}

Items.defaultProps = {
  items: [],
  loading: false,
  emptyMessage: 'Select a date and time and press search to see available services.',
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  emptyMessage: PropTypes.string,
}

export default Items
