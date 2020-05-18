import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DateTimePicker from '../../components/ui/DateTImeSelector'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
`

const ServicesContainer = styled.div`
  width: 90%;
  position: relative;
  margin: 0 auto;
`

const SearchBarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 45%;
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 2em;
`

const Services = props => {
  const { services, loading } = props
  return (
    <ServicesContainer>
      <HeaderContainer>
        <SearchBarContainer>
          <DateTimePicker />
          <Button onClick={() => console.log('searching')} text="GO" />
        </SearchBarContainer>
      </HeaderContainer>
      <CardsContainer>
        {services.map(({ title, description, id }) => (
          <Card
            primaryAction={() => console.log('next')}
            secondaryAction={() => onsole.log('view')}
            secondaryBtnText="View"
            title={title}
            primaryBtnText="Select"
            description={description}
            id={id}
            key={id}
          />
        ))}
      </CardsContainer>
    </ServicesContainer>
  )
}

Services.defaultProps = {
  services: [
    {
      id: 1,
      title: 'Example Service 1',
      description: 'This is a great service',
    },
    {
      id: 2,
      title: 'Example Service 2',
      description: 'This is a great service',
    },
    {
      id: 3,
      title: 'Example Service 3',
      description: 'This is a great service',
    },
  ],
}

Services.propTypes = {
  services: PropTypes.array,
}

export default Services
