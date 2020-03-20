import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  height: 112px;
  flex: 0 0 calc(14% - 3px);
  width: 100%;
  margin: 3px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`
const CalendarTile = props => {
  const { children, onClick } = props
  return <Container onClick={() => alert(children)}>{children}</Container>
}

export default CalendarTile
