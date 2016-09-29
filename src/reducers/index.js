import { combineReducers } from 'redux';
import cocktailsReducer from './cocktails_reducer';

const RootReducer= combineReducers({
  cocktails: cocktailsReducer
})

export default RootReducer
