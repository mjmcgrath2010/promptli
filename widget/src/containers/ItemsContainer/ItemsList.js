import { h } from 'preact'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Container from '../../components/ui/Container'
import Column from '../../components/ui/Column'
import { useEffect, useState } from 'preact/hooks'
import { setItem } from '../../actions/items/actionCreators'
import ReservationDetails from './ReservationDetails'

const ItemsListContainer = styled(Container)`
  background-color: #f8f9fb;
  height: 100%;
`

const ItemCard = styled.div`
  display: grid;
  grid-column: span 1;
  height: 70px;
  align-items: center;
  border-bottom: dashed 1px #979797;
`

const ItemTitle = styled.div`
  font-size: 1em;
`

const ItemDescription = styled.div`
  font-size: 0.75em;
`

const ItemsList = ({ navigation, showDetails, onCardClick }) => {
  const [visible, setVisible] = useState(false)
  const items = useSelector(({ items }) => items.items)
  const itemsLoaded = useSelector(({ items }) => items.itemsLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    if (itemsLoaded) {
      setVisible(true)
    }
  }, [itemsLoaded])

  const handleItemSelect = item => {
    onCardClick()
    dispatch(setItem({ item }))
  }

  return (
    <ItemsListContainer>
      {visible ? (
        items.map(item => {
          return (
            <Column>
              <ItemCard onClick={() => handleItemSelect(item)} key={item._id}>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemCard>
              {showDetails && <ReservationDetails />}
            </Column>
          )
        })
      ) : (
        <Column>
          <ItemCard />
        </Column>
      )}
    </ItemsListContainer>
  )
}

ItemsList.defaultProps = {
  navigation: {},
}

ItemsList.propTypes = {
  navigation: PropTypes.object,
}

export default ItemsList
