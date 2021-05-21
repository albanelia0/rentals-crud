import { useReducer } from 'react'

const ACTIONS = {
  CREATE_CARD: 'createCard',
  READ_CARD: 'readCard',
  UPDATE_CARD: 'updateCard',
  DELETE_CARD: 'deleteCard'
}

const getFetchData = async () => {
  const jsonResult = await window.fetch('http://localhost:3000/real-estate')
  const results = jsonResult.json()
  return results
}
const ACTIONS_REDUCERS = {
  [ACTIONS.READ_CARD]: (state, action) => {
    console.log('FETCH', getFetchData)
  }
}

const REDUCER = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function useCard () {
  const [state, dispatch] = useReducer(REDUCER, {})
  return {
    state,
    getCardInfo: () => dispatch({ type: ACTIONS.READ_CARD })
  }
}
