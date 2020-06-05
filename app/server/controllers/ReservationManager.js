const Reservation = require('../models/Reservations')
const Account = require('../models/Account')
const Item = require('../models/Item')

exports.create = (req, res) => {
  const { startDate, endDate, customer, items, totalCost } = req.body
  const account = req.params.id

  const reservationParams = {
    startDate,
    endDate,
    customer,
    items,
    totalCost,
    account,
  }
  /*
   *  TODO:
   *   = Process stripe charges
   *   = Send Confirmation Emails
   */

  Item.find()
    .where('_id')
    .in(items)
    .then(items => {
      const minQuantity = Math.min.apply(
        Math,
        items.map(item => item.quantity)
      )

      Account.findById(account, err => {
        if (err) {
          return res.sendStatus(404)
        }

        Reservation.find({
          account,
        })
          .where('startDate')
          .gte(startDate)
          .where('startDate')
          .lte(endDate)
          .where('endDate')
          .lte(endDate)
          .where('endDate')
          .gte(startDate)
          .where('items')
          .in(items)
          .then(reservations => {
            let appointment
            if (reservations.length >= minQuantity) {
              return res.json({ error: 'reservation cannot be booked' })
            }

            appointment = new Reservation(reservationParams)
            appointment
              .save()
              .then(result => {
                result.populate('items', (err, doc) => res.json(doc))
              })
              .catch(e => res.send(e))
          })
          .catch(e => res.send(e))
      })
    })
    .catch(e => res.send(e))
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
