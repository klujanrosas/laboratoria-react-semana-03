import {
  FILTER_TEXT_CHANGED,
  IN_STOCK_ONLY_CHANGED
} from './types'

// action creators

export const filterTextChanged = (text) => {
  return {
    type: FILTER_TEXT_CHANGED,
    payload: text
  }
}

export const inStockOnlyChanged = (value) => {
  return {
    type: IN_STOCK_ONLY_CHANGED,
    payload: value
  }
}

