import {combineReducers} from 'redux';

import cartReducer from './cartReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    common:commonReducer,
    cart:cartReducer
})

export default rootReducer;