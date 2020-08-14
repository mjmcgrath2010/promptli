import { h } from 'preact'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Container from '../../components/ui/Container'
import Column from '../../components/ui/Column'
import { useEffect, useState } from 'preact/hooks'
import { setItem, setItems } from '../../actions/items/actionCreators'

const ItemCard = styled.div`
  display: grid;
`

const ItemsList = ({ onClick, navigation }) => {
  const [visible, setVisible] = useState(false)
  const items = useSelector(({ items }) => items.items)
  const itemsLoaded = useSelector(({ items }) => items.itemsLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    if (itemsLoaded) {
      setVisible(true)
    }
  }, [itemsLoaded])

  useEffect(() => {
    return () => dispatch(setItems([]))
  }, [])

  const handleItemSelect = item => {
    dispatch(setItem({ item }))
    navigation.next()
  }

  return (
    <Container>
      <Column>
        {visible ? (
          items.map(item => {
            return (
              <ItemCard onClick={() => handleItemSelect(item)} key={item._id}>
                {item.name}
              </ItemCard>
            )
          })
        ) : (
          <ItemCard />
        )}
      </Column>
    </Container>
  )
}

ItemsList.defaultProps = {
  navigation: {},
}

ItemsList.propTypes = {
  navigation: PropTypes.object,
}

export default ItemsList
