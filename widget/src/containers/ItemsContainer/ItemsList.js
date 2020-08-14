import { h } from 'preact'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import Container from '../../components/ui/Container'
import Column from '../../components/ui/Column'
import { useEffect } from 'preact/hooks'
import { setItems } from '../../actions/items/actionCreators'

const ItemCard = styled.div`
  display: grid;
`

const ItemsList = ({ onClick, navigation }) => {
  const items = useSelector(({ items }) => items.items)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(setItems({ items: [] }))
  }, [])

  return (
    <Container>
      <Column>
        {items.length ? (
          items.map(item => {
            return <ItemCard>{item.name}</ItemCard>
          })
        ) : (
          <div />
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
