import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  serviceListReducer,
  serviceDetailsReducer,
} from './reducers/serviceReducers';
import { jobReducer } from './reducers/jobDataReducers';
import { orderCreateReducer } from './reducers/orderReducer';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceDetails: serviceDetailsReducer,
  job: jobReducer,
});

const jobItemsFromStorage = localStorage.getItem('jobItems')
  ? JSON.parse(localStorage.getItem('jobItems'))
  : [];

const jobAddressFromStorage = localStorage.getItem('jobAddress')
  ? JSON.parse(localStorage.getItem('jobAddress'))
  : {};

const initialState = {
  job: {
    jobItems: jobItemsFromStorage,
    jobAddress: jobAddressFromStorage,
    orderCreate: orderCreateReducer,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
