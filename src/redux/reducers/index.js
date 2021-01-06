import { combineReducers } from 'redux';
import { countries } from './countries';
import { drawer } from './drawer';

export default combineReducers({
    countries,
    drawer
})