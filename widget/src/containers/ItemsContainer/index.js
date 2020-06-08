import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Items from './Items'
import Item from './Item'
import { useState } from 'preact/hooks'
import Column from '../../components/ui/Column'

const StyledServicesContainer = styled.div``

const ItemsContainer = props => {
  const { title } = props
  const [view, setView] = useState('index')
  const [service, setService] = useState({})
  const showView = (view, opts) => {
    switch (view) {
      case 'show':
        setView('show')
        setService(opts)
        return <Item showViewMode={showView} {...opts} />

      case 'index':
      default:
        setView('index')
        return <Items showViewMode={showView} />
    }
  }

  return <div>{showView(view, service)}</div>
}

ItemsContainer.defaultProps = {}

ItemsContainer.propTypes = {}

export default ItemsContainer
