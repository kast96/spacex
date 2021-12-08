import {rocketsAPI} from '../api/api.js';

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
		dispatch(toggleIsLoading(true));
		let response = await rocketsAPI.getById(id);
		dispatch(toggleIsLoading(false));
		dispatch(setRocket(response));
	}
}

export const toggleIsLoading = (isLoading) => {
	return {type: TOGGLE_IS_LOADING, isLoading}
}

export default rocketReducer;