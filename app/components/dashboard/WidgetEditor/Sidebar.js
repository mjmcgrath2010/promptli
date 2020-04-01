import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SidebarCpntainer = styled.div`
  width: calc(25vw - 4em);
  position: fixed;
  top: 64px;
  height: 100vh;
  left: 0;
  background: gray;
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
