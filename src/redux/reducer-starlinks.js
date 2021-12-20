import {starlinksAPI} from '../api/api.js';

const SET_STARLINKS = 'spacex/starlinks/SET-STARLINKS';
const TOGGLE_IS_LOADING = 'spacex/starlinks/TOGGLE-IS-LOADING';

let initialState = {
    starlinks: [],
    isLoading: true
};

const starlinksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STARLINKS:
            return {
                ...state,
                starlinks: action.starlinks
            };

        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        default:
            return state;
    }
}

export const setStarlinks = (starlinks) => {
	return {type: SET_STARLINKS, starlinks}
}

export const getStarlinks = (page) => {
    if(!page) page = 0;
	return async (dispatch) => {
		dispatch(toggleIsLoading(true));
		let response = await starlinksAPI.query({}, {page, limit: 10});
		dispatch(setStarlinks(response));
		dispatch(toggleIsLoading(false));
	}
}

export const toggleIsLoading = (isLoading) => {
	return {type: TOGGLE_IS_LOADING, isLoading}
}

export default starlinksReducer;