import React, { Fragment } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import PropTypes from 'prop-types'
import CalendarTile from './CalendarTile'
import CommonButton from '../CommonButton'

const CalendarContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  flex: 1;
  margin-bottom: 24px;
`

const DayHeading = styled.div`
  width: 14%;
  font-size: 14px;
  text-align: center;
  align-content: baseline;
`

const HeaderContainer = styled(CalendarContainer)`
  justify-content: space-evenly;
  margin-bottom: 6px;
`

const HeaderItem = styled.div`
  width: 33%;
  text-align: center;
  align-content: center;
`

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dates: [],
      events: [],
    }
  }
  componentDidMount() {
    this.initCalendar()
  }

  initCalendar() {
    this.renderInitialDates()
  }

  renderHeadings() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return days.map(day => <DayHeading key={day}>{day}</DayHeading>)
  }
  lastMonth = () => {
    const lastMonth = this.state.startDate.subtract(1, 'months')
    this.setState(
      {
        dates: this.getDisplayDates(lastMonth),
        startDate: lastMonth,
      },
      () => {
        this.setState({
          currentMonth: this.state.dates[8].format('MMMM YYYY'),
        })
      }
    )
  }
  nextMonth = () => {
    const nextMonth = this.state.startDate.add(1, 'months')
    this.setState(
      {
        dates: this.getDisplayDates(nextMonth),
        startDate: nextMonth,
      },
      () => {
        this.setState({
          currentMonth: this.state.dates[8].format('MMMM YYYY'),
        })
      }
    )
  }
  renderEvents() {}
  currentDate() {
    return moment()
  }
  fetchBookings() {
    // TODO: Fetch Bookings
  }
  renderInitialDates() {
    const day = this.currentDate().format('DD')
    const firstDayOfMonth = moment()
      .subtract(day, 'days')
      .add(1, 'day')
    const startDateDay = firstDayOfMonth.day()
    const endDate = moment().endOf('month')
    let startDate

    if (startDateDay !== 0) {
      startDate = firstDayOfMonth.subtract(startDateDay).add(1, 'day')
    } else {
      startDate = firstDayOfMonth
    }

    this.setState({
      dates: this.getDisplayDates(startDate),
      currentMonth: this.currentDate().format('MMMM YYYY'),
      startDate,
      endDate,
    })
  }
  getDisplayDates(date) {
    const dates = []
    let startDate = moment(date)

    if (startDate.day()) {
      startDate = startDate.subtract(startDate.day(), 'days')
    }

    for (let i = 0; i <= 34; i++) {
      let offSet = moment(startDate)
      dates.push(offSet.add(i, 'days'))
    }
    return dates
  }
  addEvent() {}
  deleteEvent() {}
  render() {
    return (
      <Fragment>
        <HeaderContainer>
          <HeaderItem>
            <CommonButton text="Previous" onClick={this.lastMonth} />
          </HeaderItem>

          <HeaderItem>
            <h2>{this.state.currentMonth}</h2>
          </HeaderItem>

          <HeaderItem>
            <CommonButton text="Next" onClick={this.nextMonth} />
          </HeaderItem>
        </HeaderContainer>
        <CalendarContainer>
          {this.renderHeadings()}
          {this.state.dates.map(day => (
            <CalendarTile>{day.format('DD')}</CalendarTile>
          ))}
        </CalendarContainer>
      </Fragment>
    )
  }
}

Calendar.defaultProps = {}
Calendar.propTypes = {}

export default Calendar
