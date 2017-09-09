import _ from 'lodash';
import { FETCH_DRINKS, FETCH_DRINK } from '../actions';

export default function (state = {}, action) {	
	switch (action.type) {
	case FETCH_DRINKS:
		console.log(_.mapKeys(action.payload.data.drinks, 'idDrink'))
		return _.mapKeys(action.payload.data.drinks, 'idDrink');
	case FETCH_DRINK:
		//console.log({_.mapKeys(action.payload.data.drinks, 'idDrink'})
		return { ...state, [action.payload.data.drinks[0].idDrink]: action.payload.data.drinks[0] };
		//return _.mapKeys(action.payload.data.drinks, 'idDrink');
	default:
		console.log("reducer case: default " + state)
		return state;	
		
	}
}


