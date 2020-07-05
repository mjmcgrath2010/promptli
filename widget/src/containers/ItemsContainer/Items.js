import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DateTimePicker from '../../components/ui/DateTImeSelector'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import LoadingSpinner from '../../components/ui/LoadingSpinner'
import { useState } from 'preact/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems, removeItem, selectItem } from '../../actions/items/actionCreators'

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: end;
`

const ServicesContainer = styled.div`
  width: 90%;
  position: relative;
  margin: 0 auto;
`

const SearchBarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 45%;
`

const ButtonContainer = styled.div`
  display: inline-block;
  margin-top: 22px;
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 2em;
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



  const getItems = () => {
    const itemList = itemIds.join(',')
    return dispatch(fetchItems({ ...dateRange, items: itemList }))
  }

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
            <Button onClick={getItems} text="Search" />
          </ButtonContainer>
        </SearchBarContainer>
      </HeaderContainer>
      <CardsContainer>
        {loading && <LoadingSpinner />}
        {!loading && items.length ? (
          items.map(item => {
            const { name, description, _id } = item
            let isSelected = selectedItems.includes(_id)
            return (
              <Card
                primaryAction={handleSelect(_id, isSelected)}
                secondaryAction={() => {
                  showItem(item)
                }}
                secondaryBtnText="View"
                title={name}
                primaryBtnText={isSelected ? 'Remove' : 'Select'}
                description={description}
                key={_id}
              />
            )
          })
        ) : (
          <div>{emptyMessage}</div>
        )}
      </CardsContainer>
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
