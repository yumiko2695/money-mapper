const router = require('express').Router()
const {Transaction} = require('../db/models')
module.exports = router

//const {adminsOnly, currentUserOnly, adminOrCurrentUser} = require('../utils')

router.get('/:id', async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll({
      where: {
        userId: req.params.id
      }
    })
    res.send(transactions)
  } catch (e) {
    console.log(e, 'error with your all transactions route')
    next(e)
  }
})
