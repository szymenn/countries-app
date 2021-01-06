import { CHANGE_COMPONENT, OPEN_CLOSE_DRAWER } from '../../helpers/constants/actionTypes';

const initialState = {
    drawer: {
        open: false,
        component: 'Map'
    }
}

export const drawer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_CLOSE_DRAWER:
            return Object.assign({}, state, {
                drawer: {
                    open: !state.drawer.open,
                    component: state.drawer.component
                }
            });
        case CHANGE_COMPONENT:
            return Object.assign({}, state, {
                drawer: {
                    open: state.drawer.open,
                    component: action.payload.drawer.component
                }
            })
        default:
            return state
    }
}