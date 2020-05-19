import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Services from './Services'
import Service from './Service'
import { useState } from 'preact/hooks'
import Column from '../../components/ui/Column'

const StyledServicesContainer = styled.div``

const ServicesContainer = props => {
  const { title } = props
  const [view, setView] = useState('index')
  const [service, setService] = useState({})
  const showView = (view, opts) => {
    switch (view) {
      case 'show':
        setView('show')
        setService(opts)
        return <Service showViewMode={showView} {...opts} />

      case 'index':
      default:
        setView('index')
        return <Services showViewMode={showView} />
    }
  }

  return <div>{showView(view, service)}</div>
}

ServicesContainer.defaultProps = {}

ServicesContainer.propTypes = {}

export default ServicesContainer
