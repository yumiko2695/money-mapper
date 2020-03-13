'use strict'

const db = require('../server/db')
const {User, Transaction} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const user1point = {type: 'POINT', coordinates: [40.70447, -74.00947]}
  const user1 = await User.create({
    email: 'cody@email.com',
    password: '123',
    firstName: 'Cody',
    lastName: 'Shane',
    birthday: new Date(1995, 2, 6),
    address: '5 Hanover Square, New York, NY 10004',
    coordinates: user1point
  })
  const user2point = {type: 'POINT', coordinates: [40.72283, -73.98509]}
  const user2 = await User.create({
    email: 'murphy@email.com',
    password: '123',
    firstName: 'Murphy',
    lastName: 'Lewis',
    birthday: new Date(1999, 1, 15),
    address: '5 Hanover Square, New York, NY 10004',
    coordinates: user2point
  })
  //user 1
  const transaction1point = {type: 'POINT', coordinates: [40.70555, -74.0084]}
  const transaction1 = await Transaction.create({
    location: 'irl',
    cost: 8,
    datePurchased: new Date(2020, 3, 12),
    vendor: 'La Colombe',
    category: 'dining out',
    coordinates: transaction1point
  })

  //user 2 - ev stuff
  const transaction2point = {type: 'POINT', coordinates: [40.72739, -73.983566]}
  const transaction2 = await Transaction.create({
    location: 'irl',
    cost: 10,
    datePurchased: new Date(2020, 3, 12),
    vendor: 'Superiority Burger',
    category: 'dining out',
    coordinates: transaction2point
  })

  const transaction3point = {type: 'POINT', coordinates: [40.72739, -73.983566]}
  const transaction3 = await Transaction.create({
    location: 'irl',
    cost: 40,
    datePurchased: new Date(2020, 3, 12),
    vendor: 'A1 Records',
    category: 'media',
    coordinates: transaction3point
  })

  const transaction4point = {type: 'POINT', coordinates: [40.72131, -73.99104]}
  const transaction4 = await Transaction.create({
    location: 'irl',
    cost: 60,
    datePurchased: new Date(2020, 3, 12),
    vendor: 'Commend',
    category: 'fashion/beauty',
    coordinates: transaction4point
  })

  const transaction5point = {type: 'POINT', coordinates: [40.71636, -73.98865]}
  const transaction5 = await Transaction.create({
    location: 'irl',
    cost: 5,
    datePurchased: new Date(2020, 3, 12),
    vendor: 'Donut Plant',
    category: 'dining out',
    coordinates: transaction5point
  })

  await user1.addTransaction(transaction1)
  await user2.addTransactions([
    transaction2,
    transaction3,
    transaction4,
    transaction5
  ])

  console.log(`seeded users and transactions`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
