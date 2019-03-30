
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QTY = 'CHANGE_QTY';
export const CLEAR = 'CLEAR';

export function add(goods) {
    return {
        type:ADD_TO_CART,
        payload:goods
    }
}

export function remove(id) {
    console.log(id)
    return {
        type:REMOVE_FROM_CART,
        payload:{id}
    }
}

export function changeqty(id,qty) {
    return {
        type:CHANGE_QTY,
        payload:{id,qty}
    }
}

export function clear() {
    return {
        type:ADD_TO_CART
    }
}

export default {
    add,
    remove,
    changeqty,
    clear
}