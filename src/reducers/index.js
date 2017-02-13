import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import ReduxThunk from 'redux-thunk';
import login from './login';

const reducers = combineReducers({
    form,
    login
});

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));