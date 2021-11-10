const OPENED_MOBILE_MENU = 'spacex/app/OPENED-MOBILE-MENU';

let initialState = {
    isOpenedMobileMenu: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPENED_MOBILE_MENU:
            return {
                ...state,
                isOpenedMobileMenu: action.isOpened === true
            };

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

export default appReducer;