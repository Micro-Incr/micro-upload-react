import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import ReduxThunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const middlewareEnhancer = applyMiddleware(ReduxThunk);

export const store = createStore(reducers, composeWithDevTools(middlewareEnhancer));
