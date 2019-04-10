import { createStore } from 'redux';

// import rootReducer from './reducers/';

// //创建store
// let store = createStore(rootReducer);









let initState = {
    cartList: [],
    result: 0.00,
}

let reducer = (state = initState, { type, payload }) => {

    switch (type) {
        case 'addcart':
            return {
                ...state,
                cartList: payload

            }

        case 'result':
            return {
                ...state,
                result: payload

            }

        default:
            return state;
    }
}

let store = createStore(reducer);

export default store;