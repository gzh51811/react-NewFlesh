
// import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QTY,CLEAR} from '../actions/cartAction';

let initState = {
    cartList: []
}

let reducer = (state = initState, { type, payload }) => {
    switch (type) {

        case 'addcart':
            return {
                ...state,

                cartList: payload


            }
        // case ADD_TO_CART :
        //     return {
        //         ...state,
        //         goodslist:[...state.goodslist,payload]
        //     }
        // case REMOVE_FROM_CART :
        //     console.log(payload)
        //     return {
        //         ...state,
        //         goodslist:state.goodslist.filter(goods=>goods.goods_id!==payload.id)
        //     }
        // case CLEAR :
        //     return {
        //         ...state,
        //         goodslist:[]
        //     }
        default:
            return state
    }
}

export default reducer;