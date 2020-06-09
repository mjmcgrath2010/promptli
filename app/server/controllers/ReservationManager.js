const Reservation = require('../models/Reservations')
const Account = require('../models/Account')
const Item = require('../models/Item')

exports.params = (req, res, next, id) => {
  const { items, startDate, endDate } = req.body.items ? req.body : req.query
  const itemArray =
    typeof items !== 'string'
      ? items
      : items
          .split(',')
          .map(entry => !!entry && entry)
          .filter(Boolean)

  Account.findById(id, (err, account) => {
    if (err) {
      return res.send(err)
    }

    req.account = account._id

    Item.find()
      .where('_id')
      .in(itemArray)
      .then(itemsDocs => {
        req.items = itemsDocs
        req.quantity = Math.min.apply(
          Math,
          itemsDocs.map(item => item.quantity)
        )

        getReservations({ account, items: itemArray, startDate, endDate })
          .then(reservations => {
            req.reservations = reservations
            next()
          })
          .catch(e => res.send(e))
      })
      .catch(e => res.send(e))
  })
}

const getReservations = ({ items, startDate, endDate, account }) => {
  return new Promise((resolve, reject) => {
    Reservation.find({
      account,
      status: 'active',
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
      .then(reservations => resolve(reservations))
      .catch(e => reject(e))
  })
}

exports.create = (req, res) => {
  const { startDate, endDate, customer, items, totalCost } = req.body
  const { account, quantity, reservations } = req
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
  let appointment
  if (reservations.length >= quantity) {
    return res.json({ error: 'reservation cannot be booked' })
  }

  appointment = new Reservation(reservationParams)
  appointment
    .save()
    .then(result => {
      result.populate('items', (err, doc) => res.json(doc))
    })
    .catch(e => res.send(e))
}

// @return
// { items: [<Item>,...] }

exports.getAvailableItems = (req, res) => {
  const items = req.items.map(item => req.reservations.length < item.quantity && item).filter(Boolean)

  res.send({ items })
}
