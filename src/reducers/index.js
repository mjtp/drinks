import { combineReducers } from 'redux';
import DrinksReducer from './reducer_drinks';

const rootReducer = combineReducers({
	drinks: DrinksReducer
});

export default rootReducer;
