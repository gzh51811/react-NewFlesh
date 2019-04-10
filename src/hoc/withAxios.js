import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5003/';

// axios.defaults.headers.post["Content-type"] = "application/json"
/**
 * 高阶组件：包装函数
 * 就是一个纯函数，接收一个组件，返回一个新的组件
 * 高阶组件不是React组件，但她返回React组件
 */
export default (Com) => {
    return function (props, context) {
        return <Com axios={axios} {...props} {...context} />
    }
}