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

const HeaderContainer = styled.div`
  grid-column: span 1;
  grid-template-columns: repeat(1, 1fr);
`

const ServicesContainer = styled.div`
  display: grid;
  width: 90%;
  position: relative;
  margin: 0 auto;
  background-color: #f8f9fb;
`

const SearchBarContainer = styled.div`
  grid-column: span 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 1em 0.5em;
  grid-row-start: -1;
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
  const { loading, emptyMessage, showItem, itemIds } = props
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  })

  const dispatch = useDispatch()
  const items = useSelector(({ items }) => items.items)
  const selectedItems = useSelector(({ items }) => items.selectedItems)

  const getItems = () => {}

  const handleSelect = (id, isSelected) => e => {
    if (e) {
      e.preventDefault()
    }
    return isSelected ? dispatch(removeItem(id)) : dispatch(selectItem(id))
  }

  return (
    <ServicesContainer>
      <HeaderContainer>
        <SearchBarContainer>
          <DateTimePicker onChange={setDateRange} />
          <ButtonContainer>
            <SearchButton onClick={getItems} text="Search For Parking" />
          </ButtonContainer>
        </SearchBarContainer>
      </HeaderContainer>
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
    </ServicesContainer>
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
