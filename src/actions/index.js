import axios from 'axios';

export const FETCH_DRINKS = 'FETCH_DRINKS';
export const FETCH_DRINK = 'FETCH_DRINK';

const SEARCH_URL = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const FETCH_URL = 'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export function fetchDrinks (values) {
	const request = axios.get(`${SEARCH_URL}${values}`)
	return {
		type: FETCH_DRINKS,
		payload: request
	}
}

export function fetchDrink (id) {
	const request = axios.get(`${FETCH_URL}${id}`)
	return {
		type: FETCH_DRINK,
		payload: request
	}
}