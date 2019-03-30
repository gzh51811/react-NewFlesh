import {createStore} from 'redux';

import rootReducer from './reducers';

//创建store
let store = createStore(rootReducer);

export default store;