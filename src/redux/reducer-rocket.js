import {rocketsAPI} from '../api/api.js';
import { setBreadcrumbDetail } from './reducer-app.js';

const SET_ROCKET = 'spacex/rocket/SET-ROCKET';
const TOGGLE_IS_LOADING = 'spacex/rocket/TOGGLE-IS-LOADING';

let initialState = {
    rocket: [],
    isLoading: true
};

const rocketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROCKET:
            return {
                ...state,
                rocket: action.rocket
            };

        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        default:
            return state;
    }
}

export const setRocket = (rocket) => {
	return {type: SET_ROCKET, rocket}
}

export const getRocket = (id) => {
	return async (dispatch) => {
        dispatch(setBreadcrumbDetail(false));
		dispatch(toggleIsLoading(true));
		let response = await rocketsAPI.getById(id);
		dispatch(setRocket(response));
        dispatch(setBreadcrumbDetail(response.name));
		dispatch(toggleIsLoading(false));
	}
}

export const toggleIsLoading = (isLoading) => {
	return {type: TOGGLE_IS_LOADING, isLoading}
}

export default rocketReducer;