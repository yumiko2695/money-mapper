import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_TRANSACTIONS = 'GET_TRANSACTIONS'

/**
 * INITIAL STATE
 */
const initialState = []

/**
 * ACTION CREATORS
 */
const getTransactions = transactions => ({type: GET_TRANSACTIONS, transactions})

/**
 * THUNK CREATORS
 */
export const getTransactionsThunk = user => {
  return async dispatch => {
    try {
      const {id} = await user
      const {data} = await axios.get(`/api/transactions/${id}`)
      dispatch(getTransactions(data))
    } catch (error) {
      console.log('Failed to GET /api/products', error)
    }
  }
}

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return action.transactions
    default:
      return state
  }
}

export default transactionsReducer
