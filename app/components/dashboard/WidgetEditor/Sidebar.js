import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SidebarCpntainer = styled.div`
  width: calc(25vw - 4em);
  position: fixed;
  top: 64px;
  height: 100vh;
  left: 0;
  background: #f2f2f2;
  box-shadow: 3px -4px 3px rgba(0, 0, 0, 0.25);
`

const Sidebar = props => {
  return (
    <SidebarCpntainer>
      <div>Sidebar</div>
    </SidebarCpntainer>
  )
}

Sidebar.defaultProps = {}
Sidebar.propTypes = {}

export default Sidebar
