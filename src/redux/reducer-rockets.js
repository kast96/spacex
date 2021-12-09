import {rocketsAPI} from '../api/api.js';

const SET_ROCKETS = 'spacex/rockets/SET-ROCKETS';
const TOGGLE_IS_LOADING = 'spacex/rockets/TOGGLE-IS-LOADING';

let initialState = {
    rockets: [],
    isLoading: true
};

const rocketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROCKETS:
            return {
                ...state,
                rockets: action.rockets
            };

        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        default:
            return state;
    }
}

export const setRockets = (rockets) => {
	return {type: SET_ROCKETS, rockets}
}

export const getRockets = () => {
	return async (dispatch) => {
		dispatch(toggleIsLoading(true));
		let response = await rocketsAPI.getList();
		dispatch(setRockets(response));
		dispatch(toggleIsLoading(false));
	}
}

export const toggleIsLoading = (isLoading) => {
	return {type: TOGGLE_IS_LOADING, isLoading}
}

export default rocketsReducer;