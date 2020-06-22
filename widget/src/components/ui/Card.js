import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'
import { useEffect } from 'preact/hooks'

const StyledCard = styled.div`
  width: 300px;
  height: 420px;
  display: inline-flex;
  position: relative;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.offWhite};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 3px 4px #00000057;
`

const Header = styled.div`
  background: ${({ theme }) => theme.white};
  width: 100%;
  position: absolute;
  top: 0;
  padding: 1em;
`
const Title = styled.div``

const Image = styled.div`
  display: flex;
  width: 100%;
  height: 145px;
  background: ${({ url }) => `url(${url}) center no-repeat`};
  background-size: cover;
  top: 56px;
  position: absolute;
`

const Body = styled.div`
  background: ${({ theme }) => theme.white};
  position: absolute;
  bottom: 70px;
  width: 100%;
  height: 125px;
  padding: 1em;
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
  background: ${({ theme }) => theme.white};
  border-top: 2px solid #dbdbdb;
`

const FloatLeft = styled.div`
  display: inline-flex;
  float: left;
  padding: 1em;
`
const FloatRight = styled.div`
  display: inline-flex;
  float: right;
  padding: 1em;
`

const Card = props => {
  const {
    title,
    primaryBtnText,
    secondaryBtnText,
    imageUrl,
    primaryAction,
    secondaryAction,
    description,
    ...rest
  } = props

  return (
    <StyledCard {...rest}>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Image url={imageUrl} alt={title} />
      <Body>{description}</Body>
      <Footer>
        {secondaryAction && (
          <FloatLeft>
            <Button type="secondary" onClick={secondaryAction} text={secondaryBtnText} />
          </FloatLeft>
        )}
        <FloatRight>
          <Button onClick={primaryAction} text={primaryBtnText} />
        </FloatRight>
      </Footer>
    </StyledCard>
  )
}

Card.defaultProps = {
  secondaryBtnText: undefined,
  imageUrl: '//i.picsum.photos/id/810/300/150.jpg',
  secondaryAction: undefined,
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  primaryBtnText: PropTypes.string.isRequired,
  secondaryBtnText: PropTypes.string,
  image: PropTypes.string,
  primaryAction: PropTypes.func.isRequired,
  secondaryAction: PropTypes.func,
}

export default Card
