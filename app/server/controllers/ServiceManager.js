const Reservation = require('../models/Reservations')
const Account = require('../models/Account')

exports.create = (req, res) => {
  const { start, end, customer, service, packages, totalCost } = req.body
  const _id = req.params.id
  const reservationParams = {
    startDate: start,
    endDate: end,
    customer,
    service,
    packages,
    totalCost,
    account: _id,
  }

  /*
   *  TODO:
   *   = Process stripe charges?
   *   = Execute booking on connected calendar
   *   = Send Confirmation Emails
   */
  Account.findById(_id, err => {
    if (err) {
      return res.sendStatus(404)
    }

    Reservation.find({
      account: _id,
    })
      .where('startDate')
      .gte(start)
      .where('startDate')
      .lte(end)
      .where('endDate')
      .lte(end)
      .where('endDate')
      .gte(start)
      .then(reservations => {
        let appointment
        if (reservations.length) {
          return res.send('already booked')
        }

        appointment = new Reservation(reservationParams)
        appointment
          .save()
          .then(result => {
            result.populate('service').populate('packages', (err, doc) => res.json(doc))
          })
          .catch(e => res.send('error booking reservation'))
      })
      .catch(e => res.send(e))
  })
}

exports.getReservationsByDate = (req, res, next) => {
  /* TODO:
   *   - Query Reservation by day
   *
   */
  next()
}

exports.getReservationsByDateRange = (req, res, next) => {
  /* TODO:
   *   - Query Reservation by date range
   *
   */
  next()
}

exports.getReservationsByTimeRange = (req, res, next) => {
  /* TODO:
   *   - Query Reservation by Time Range
   *
   */
  next()
}
