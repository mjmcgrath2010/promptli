import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin: 2em 2.2em 0.5em;
  color: #fff;
`

const TitleContainer = styled.div`
  grid-column: span 8;
  font-size: 20px;
`

const Service = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin: 0.25em 0 0;
`

const LogoContainer = styled.div`
  grid-column: span 4;
  font-size: 10px;
  color: #4a4a4a;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

const LogoImage = styled.img`
  width: 90px;
  height: auto;
  justify-content: flex-end;
`

const CategoriesHeader = ({ title, service }) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        {title}
        <Service>{service}</Service>
      </TitleContainer>
      <LogoContainer>
        powered by
        <LogoImage src="https://promptli-assets.s3.amazonaws.com/branding/logo.svg" />
      </LogoContainer>
    </HeaderContainer>
  )
}

CategoriesHeader.defaulProps = {
  service: 'Parking',
}

CategoriesHeader.propTypes = {
  title: PropTypes.string.isRequired,
  service: PropTypes.string,
}

export default CategoriesHeader
