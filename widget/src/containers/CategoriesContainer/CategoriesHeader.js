import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 0.5em 2em;
`

const TitleContainer = styled.div`
  grid-column: span 6;
`

const CategoriesHeader = ({ title }) => {
  return (
    <HeaderContainer>
      <TitleContainer>{title}</TitleContainer>
    </HeaderContainer>
  )
}

CategoriesHeader.defaulProps = {}

CategoriesHeader.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CategoriesHeader
