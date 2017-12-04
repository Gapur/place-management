import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { reducer as reduxFormReducer } from 'redux-form';
import { createLogger } from 'redux-logger';

let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error && action.type.startsWith("@@redux-form"),
  });
  middlewares.push(logger);
}

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const reducers = combineReducers({
  users,
  router: routerReducer,
  form: reduxFormReducer,
});

const store = createStore(reducers, {}, applyMiddleware(...middlewares, historyMiddleware));

export { store, history };
