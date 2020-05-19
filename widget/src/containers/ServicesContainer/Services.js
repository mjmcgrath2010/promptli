import { h } from 'preact'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DateTimePicker from '../../components/ui/DateTImeSelector'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import LoadingSpinner from '../../components/ui/LoadingSpinner'

const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: end;
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

const ButtonContainer = styled.div`
  display: inline-block;
  margin-top: 22px;
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 2em;
`

const Services = props => {
  const { services, loading, emptyMessage } = props
  return (
    <ServicesContainer>
      <HeaderContainer>
        <SearchBarContainer>
          <DateTimePicker />
          <ButtonContainer>
            <Button onClick={() => console.log('searching')} text="Search" />
          </ButtonContainer>
        </SearchBarContainer>
      </HeaderContainer>
      <CardsContainer>
        {services.length ? (
          services.map(({ name, description, id }) => (
            <Card
              primaryAction={() => console.log('next')}
              secondaryAction={() => onsole.log('view')}
              secondaryBtnText="View"
              title={name}
              primaryBtnText="Select"
              description={description}
              id={id}
              key={id}
            />
          ))
        ) : loading ? (
          <LoadingSpinner />
        ) : (
          <div>{emptyMessage}</div>
        )}
      </CardsContainer>
    </ServicesContainer>
  )
}

Services.defaultProps = {
  services: [],
  loading: false,
  emptyMessage: 'Select a date and time and press search to see available services.',
}

Services.propTypes = {
  services: PropTypes.array,
  loading: PropTypes.bool,
  emptyMessage: PropTypes.string,
}

export default Services
