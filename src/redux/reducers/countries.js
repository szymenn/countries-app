import { UPDATE_COUNTRIES } from '../../helpers/constants/actionTypes';

const initialState = {
    countries: []
}

export const countries = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COUNTRIES:
            return Object.assign({}, state, {
                countries: action.payload.countries
            });
        default:
            return state
    }
}