import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Items from './Items'
import Item from './Item'
import { useState } from 'preact/hooks'
import Column from '../../components/ui/Column'

const ItemsContainer = ({ items }) => {
  const [view, setView] = useState('index')
  const [item, setItem] = useState({})

  const showView = (view, opts) => {
    switch (view) {
      case 'show':
        setView('show')
        setItem(opts)
        return <Item showViewMode={showView} {...opts} />

      case 'index':
      default:
        setView('index')
        return <Items items={items} showViewMode={showView} />
    }
  }

  return <div>{showView(view, item)}</div>
}

ItemsContainer.defaultProps = {}

ItemsContainer.propTypes = {}

export default ItemsContainer
