import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DateTimePicker from '../../components/ui/DateTImeSelector'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { useState } from 'preact/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, selectItem } from '../../actions/items/actionCreators'

const ItemsContainer = styled.div`
  display: grid;
  height: 100vh;
  position: relative;
  grid-template-rows: repeat(12, 1fr);
  margin: 0 auto;
  background: ${({ image }) => `url(${image})`} center no-repeat;
  background-size: cover;
`
const Hero = styled.div`
  grid-column: span 1;
  grid-row: span 6;
`

const HeroBody = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`

const BackIcon = styled.div`
  grid-column: span 12;
  font-size: 24px;
  color: #fff;
  span {
    padding: 1em;
    cursor: pointer;
  }
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
  grid-row: span 6;
  border-radius: 26px 26px 0 0;
  padding: 1em 0;
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

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 2em;
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
  const { loading, emptyMessage, showItem, itemIds, containerNavigation } = props
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  })

  const dispatch = useDispatch()
  const items = useSelector(({ items }) => items.items)
  const selectedItems = useSelector(({ items }) => items.selectedItems)
  const { title, image = '//picsum.photos/200' } = useSelector(({ categories }) => categories.activeCategory)

  const getItems = () => {}

  const handleSelect = (id, isSelected) => e => {
    if (e) {
      e.preventDefault()
    }
    return isSelected ? dispatch(removeItem(id)) : dispatch(selectItem(id))
  }

  return (
    <ItemsContainer image={image}>
      <Hero>
        <HeroBody>
          <BackIcon>
            <div onClick={() => containerNavigation.previous()}>
              <span className="material-icons">arrow_back</span>
            </div>
          </BackIcon>
          <CategoryTitle>{title}</CategoryTitle>
        </HeroBody>
      </Hero>
      <SearchContainer>
        <SearchBarContainer>
          <DateTimePicker onChange={setDateRange} />
          <ButtonContainer>
            <SearchButton onClick={getItems} text="Search For Parking" />
          </ButtonContainer>
        </SearchBarContainer>
      </SearchContainer>
      {/*<CardsContainer>*/}
      {/*  {loading && <LoadingSpinner />}*/}
      {/*  {!loading && items.length ? (*/}
      {/*    items.map(item => {*/}
      {/*      const { name, description, _id } = item*/}
      {/*      let isSelected = selectedItems.includes(_id)*/}
      {/*      return (*/}
      {/*        <Card*/}
      {/*          primaryAction={handleSelect(_id, isSelected)}*/}
      {/*          secondaryAction={() => {*/}
      {/*            showItem(item)*/}
      {/*          }}*/}
      {/*          secondaryBtnText="View"*/}
      {/*          title={name}*/}
      {/*          primaryBtnText={isSelected ? 'Remove' : 'Select'}*/}
      {/*          description={description}*/}
      {/*          key={_id}*/}
      {/*        />*/}
      {/*      )*/}
      {/*    })*/}
      {/*  ) : (*/}
      {/*    <div>{emptyMessage}</div>*/}
      {/*  )}*/}
      {/*</CardsContainer>*/}
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
