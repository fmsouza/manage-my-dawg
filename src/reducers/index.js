import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
    form
});

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));