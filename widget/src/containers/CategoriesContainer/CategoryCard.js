import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  grid-column: span 1;
  background: ${({ url }) => `url(${url}) center`};
  background-size: cover;
  color: #fff;
  grid-gap: 20px;
  min-height: 100px;
  margin: 0.5em 1em;
  border-radius: 10px;
  box-shadow: 4px 3px 4px rgba(0, 0, 0, 0.3);
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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
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
  const { title, city, state, url } = props
  return (
    <Container url={url}>
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
