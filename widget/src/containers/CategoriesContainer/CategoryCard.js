import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  grid-column: span 1;
  background: ${({ image }) => `url(${image}) center`};
  background-size: cover;
  color: #fff;
  min-height: 100px;
  margin: 0.5em 2em;
  border-radius: 12px;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  // Desktop Styles
  @media all and (min-width: 575px) {
  }
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  height: 100px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`

const Title = styled.div`
  font-size: 24px;
  line-height: 1.5;
`

const Location = styled.div`
  color: #fff;
  align-content: space-between;
`

const CategoryCard = props => {
  const { title, city, state, image, onClick } = props
  return (
    <Container image={image} onClick={onClick}>
      <Body>
        <Title>{title}</Title>
        <Location>
          {city}, {state}
        </Location>
      </Body>
    </Container>
  )
}

CategoryCard.defaultProps = {
  url: '//picsum.photos/200',
}

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default CategoryCard
