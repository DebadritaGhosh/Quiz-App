import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import rootReducer from 'reducers';

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(ReduxThunk)
    : composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
