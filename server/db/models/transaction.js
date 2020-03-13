const Sequelize = require('sequelize')
const db = require('../db')
const {DataTypes} = Sequelize

const Transaction = db.define('transaction', {
  location: {
    type: Sequelize.ENUM(['irl', 'online']),
    allowNull: false
  },
  cost: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  datePurchased: {
    type: Sequelize.DATE
  },
  vendor: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.ENUM([
      'home goods',
      'technology/appliances',
      'media',
      'fashion/beauty',
      'health and fitness',
      'dining out',
      'groceries',
      'charitable donations',
      'transportation/travel',
      'events'
    ])
  },
  coordinates: {
    type: DataTypes.GEOGRAPHY('POINT', 4326)
  }
})

module.exports = Transaction
