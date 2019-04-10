import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputNumber, Button } from 'antd';
import withAxios from '../../hoc/withAxios'
import store from '../../store'
import { Checkbox } from 'zent'
import 'zent/css/index.css'

const CheckboxGroup = Checkbox.Group


export class Home_cart_list extends Component {
    constructor() {
        super();
        this.state = {
            checkedList: [],

            result: 0
        }
    }



    // 全选
    handleCheckedAll = (e) => {
        this.setState({
            checkedList: e.target.checked ? this.props.cartlist.slice() : []
        })

        // 计算价格
        let res = 0;
        if (e.target.checked) {
            for (let i = 0; i < this.props.cartlist.length; i++) {
                res += this.props.cartlist[i].price * this.props.cartlist[i].number;
            }
        }
        this.setState({ result: res })
        store.dispatch({ type: 'result', payload: res })
    }

    // 单选
    handleChange(checkedList) {
        this.setState({ checkedList })
        // 计算价格
        let res = 0;
        for (let i = 0; i < checkedList.length; i++) {
            res += checkedList[i].price * checkedList[i].number;
        }
        this.setState({ result: res })

        store.dispatch({ type: 'result', payload: res })

    }

    // 数量
    onChangenumber(goods_id, value) {
        this.setState({
            checkedList: []
        })

        this.props.axios.post('/cart/number', { params: { goods_id, value } }).then(res => {
            let { data: { data } } = res;

            // 修改redux 的状态
            store.dispatch({ type: 'addcart', payload: data })
        });

    }

    // 删除
    del(goods_id) {
        console.log(goods_id)
        this.props.axios.post('/cart/del', { params: { goods_id } }).then(res => {
            let { data: { data } } = res;

            // 修改redux 的状态
            store.dispatch({ type: 'addcart', payload: data })
        });
    }



    render() {
        const { checkedList } = this.state
        const checkedAll = !!checkedList.length && (checkedList.length === this.props.cartlist.length)
        const indeterminate = !!checkedList.length && (checkedList.length !== this.props.cartlist.length)

        return (
            <div className="cartlist">
                <Checkbox
                    className="allcheck"
                    checked={checkedAll}
                    indeterminate={indeterminate}
                    onChange={this.handleCheckedAll}
                >全选</Checkbox>

                {/* <hr /> */}

                <CheckboxGroup
                    className="checkGroup"
                    value={checkedList}
                    onChange={this.handleChange.bind(this)}
                >
                    {this.props.cartlist.map((item, index) => {

                        return (
                            <div key={index} className="checkitemli">

                                <Checkbox key={item} value={item} >
                                    <div >

                                        <img className="imgs" src={require(`../../static/image/imgages/${item.image}`)} />
                                        <div className="conter" >
                                            <p className="p1"> {item.name}</p>
                                            <p className="p2"> {item.name}</p>
                                            <div className="price">
                                                <span style={{ color: 'red', }}>￥{item.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                </Checkbox>
                                <InputNumber className="inputnumber" size="small" min={1} max={10} defaultValue={item.number} onChange={this.onChangenumber.bind(this, item.goods_id)} />
                                <Button className="del" onClick={this.del.bind(this, item.goods_id)}>删除</Button>

                            </div>
                        )
                    })}

                </CheckboxGroup>

                <div className='allprice'>
                    <p >
                        <span>商品总价</span>
                        <i >￥{this.state.result}</i>
                    </p>
                    <p >
                        <span>商品券</span>
                        <i >￥9</i>
                    </p>
                    <p >
                        <span>红包</span>
                        <i >￥0.9</i>
                    </p>
                    <p >
                        <span>商品实付</span>
                        <i >￥{this.state.results}</i>
                    </p>
                    <p >
                        <span>配送费</span><span style={{ margin: '0 0.625rem', fontSize: '0.1rem', color: '#999' }}>实付满99包邮</span>
                        <i >￥2.0</i>
                    </p>
                    <p >
                        <span></span><span style={{ margin: '0 0.625rem', fontSize: '0.5rem', color: '#999' }}></span>

                        <i style={{ color: 'red' }}>￥{this.state.result == 0 ? 0 : this.state.result + 2}</i>
                    </p>
                    {console.log(this.props)}

                </div>
            </div >
        )



    }
}


const mapDispatchToProps = {

}


const mapStateToProps = (state) => {
    return { cartlist: state.cartList, resluts: state.reslut }
}


Home_cart_list = withAxios(Home_cart_list)

export default connect(mapStateToProps, mapDispatchToProps)(Home_cart_list)





