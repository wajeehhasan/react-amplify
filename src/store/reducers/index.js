// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import userauth from './authentication';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, userauth });

export default reducers;
