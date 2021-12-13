import { variables } from '../utils/routes/routes';

const OPENED_MOBILE_MENU = 'spacex/app/OPENED-MOBILE-MENU';
const SET_BREADCRUMB_DETAIL = 'spacex/app/SET-BREADCRUMB-DETAIL';

const initialBreadcrumbVariables = {};
for (const key in variables) {
    initialBreadcrumbVariables[key] = false;
}

const initialState = {
    isOpenedMobileMenu: false,
    breadcrumbVariables: initialBreadcrumbVariables
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPENED_MOBILE_MENU:
            return {
                ...state,
                isOpenedMobileMenu: action.isOpened === true
            };

        case SET_BREADCRUMB_DETAIL:
            return {
                ...state,
                breadcrumbVariables: {
                    ...state.breadcrumbVariables,
                    detail: action.name
                }
            }

        default:
            return state;
    }
}

export const openMobileMenu = () => {
	return {type: OPENED_MOBILE_MENU, isOpened: true}
}

export const closeMobileMenu = () => {
	return {type: OPENED_MOBILE_MENU, isOpened: false}
}

export const setBreadcrumbDetail = (name) => {
	return {type: SET_BREADCRUMB_DETAIL, name: name}
}

export default appReducer;