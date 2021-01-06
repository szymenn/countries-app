import { CHANGE_COMPONENT, OPEN_CLOSE_DRAWER } from '../../helpers/constants/actionTypes';

export const ChangeComponent = (component) => {
    return {
        type: CHANGE_COMPONENT,
        payload: {
            drawer: {
                component: component
            }
        }
    }
}

export const OpenCloseDrawer = () => {
    return {
        type: OPEN_CLOSE_DRAWER,
    }
}