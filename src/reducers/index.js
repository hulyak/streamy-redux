import { combineReducers } from 'redux';
// built into redux form
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';

export default combineReducers({ auth: authReducer, form: formReducer });
