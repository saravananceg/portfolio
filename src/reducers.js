import { combineReducers } from 'redux'

const initialState= {
    selected: "landing"
};

const portfolio = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_SECTION':
      return {...state, selected: action};
    default:
      return state
  }
}


export default combineReducers({
  portfolio
})