
import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QTY,CLEAR} from '../actions/cartAction';

let initState = {
    goodslist:[{
            goods_id:123,
            goods_name:'jingjing',
            goods_price:88,
            qty:1,
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351569257288_360.jpg'
        },
        {
            goods_id:321,
            goods_name:'didi',
            goods_price:188.98,
            qty:3,
            goods_image:'https://www.nanshig.com/data/upload/shop/store/goods/39/39_05982351569257288_360.jpg'
        }
    ]
}
let reducer = (state=initState,{type,payload})=>{
    switch(type){
        case CHANGE_QTY :
            return {
                ...state,
                goodslist:state.goodslist.map(goods=>{
                    if(goods.goods_id === payload.id){
                        goods.qty = payload.qty
                    }
                    return goods;
                })
            }
        case ADD_TO_CART :
            return {
                ...state,
                goodslist:[...state.goodslist,payload]
            }
        case REMOVE_FROM_CART :
            console.log(payload)
            return {
                ...state,
                goodslist:state.goodslist.filter(goods=>goods.goods_id!==payload.id)
            }
        case CLEAR :
            return {
                ...state,
                goodslist:[]
            }
        default:
            return state
    }
}

export default reducer;