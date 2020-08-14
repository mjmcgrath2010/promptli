import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Column from '../../components/ui/Column'
import BackIcon from '../../components/ui/BackIcon'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../../components/ui/Container'
import { selectItem } from '../../actions/items/actionCreators'
import Button from '../../components/ui/Button'

const ItemContainer = styled(Container)`
  background-color: #f8f9fb;
  height: 100%;
  min-height: 100vh;
`

const ItemDescriptionContainer = styled(Column)`
  padding: 0.5em 2em;
`

const Item = props => {
  const { onClickBack } = props
  const item = useSelector(({ items }) => items.item)
  const { name, description } = item
  const dispatch = useDispatch()
  const handleSelect = () => {
    dispatch(selectItem(item))
  }
  return (
    <ItemContainer>
      <Column>
        <BackIcon dark onClick={onClickBack} />
      </Column>
      <ItemDescriptionContainer>
        <h1>{name}</h1>
        <h2> {description}</h2>
      </ItemDescriptionContainer>
      <Column>
        <Button onClick={handleSelect} text="Select Item" />
      </Column>
    </ItemContainer>
  )
}

Item.defaultProps = {}

Item.propTypes = {}

export default Item
