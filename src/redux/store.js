import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import announcementReducer from './announcement-reducer';

let reducers = combineReducers({
  announcementsPage: announcementReducer,
  form: formReducer,
});

let store = createStore(reducers);
window.store = store;
console.log(store);

export default store;
