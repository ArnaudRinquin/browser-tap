import { combineReducers } from 'redux';
import tapStatus from './tapStatus';
import extension from './extension';

export default combineReducers({
    tapStatus,
    extension,
});
