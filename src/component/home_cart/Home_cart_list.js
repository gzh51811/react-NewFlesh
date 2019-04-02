import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputNumber } from 'antd';


import { Checkbox } from 'zent'
import 'zent/css/index.css'
import '../../css/home_cart.css';

const CheckboxGroup = Checkbox.Group
const ITEMS = ['Item3', 'Item2', 'Item1']

export class Home_cart_list extends Component {
    state = {
        checkedList: []
    }

    // 全选
    handleCheckedAll = (e) => {
        this.setState({
            checkedList: e.target.checked ? ITEMS.slice() : []
        })
    }

    // 单选
    handleChange(checkedList) {
        this.setState({ checkedList })
    }



    render() {
        const { checkedList } = this.state
        const checkedAll = !!checkedList.length && (checkedList.length === ITEMS.length)
        const indeterminate = !!checkedList.length && (checkedList.length !== ITEMS.length)

        return (
            <div className="cartlist">
                <Checkbox
                    className="allcheck"
                    checked={checkedAll}
                    indeterminate={indeterminate}
                    onChange={this.handleCheckedAll}
                >全选</Checkbox>

                <hr />

                <CheckboxGroup
                    style={{ margin: '0 0.3125rem' }}
                    value={checkedList}
                    onChange={this.handleChange.bind(this)}
                >
                    {ITEMS.map(item => {

                        return (
                            <div key={item} style={{ background: '#fff', margin: ' 0.5rem 0', position: "relative" }}>

                                <Checkbox key={item} value={item} >
                                    <div style={{ padding: '1rem', paddingLeft: '2rem', width: '100%' }}>


                                        <img style={{ marginLeft: '1rem', height: '100%', width: '30%' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                                        <div style={{ padding: '0.625rem 0', width: '57%', float: 'right', height: "100%" }}>
                                            <p style={{
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                margin: '0', color: '#333', fontSize: '0.8rem'
                                            }}> 鸡蛋就都几点男法师打发所发生的</p>
                                            <p style={{
                                                textOverflow: 'ellipsis',
                                                overflow: 'hidden',
                                                whiteSpace: 'nowrap',
                                                margin: '0', color: '#999', fontSize: '0.7rem'
                                            }}>鸡蛋就都几点男法师打发所发生的</p>
                                            <div style={{ margin: '0.9rem 0' }}>
                                                <span style={{ color: 'red', }}>￥99.00</span>

                                            </div>
                                        </div>
                                    </div>

                                </Checkbox>
                                <InputNumber style={{ position: 'absolute', right: '1.5rem', top: '6rem', width: '3.3rem' }} size='large' min={1} max={10} defaultValue={1} onChange={this.onChange} />

                            </div>
                        )
                    })}

                </CheckboxGroup>

                <div className='allprice' style={{
                    padding: '0.1875rem 0',
                    marginTop: '0.5rem',
                    background: '#fff',
                    color: '#333',
                    fontSize: '0.375rem'
                }}>
                    <p style={{ margin: '0 0.3125rem', padding: '1rem 0.6rem', borderBottom: '0.0625rem solid #ccc ' }}>
                        <span>商品总价</span>
                        <em style={{ float: 'right', fontStyle: 'normal' }}>￥99.9</em>
                    </p>
                    <p style={{ margin: '0 0.3125rem', padding: '0.4rem 0.6rem', borderBottom: '0.0625rem solid #ccc ' }}>
                        <span>商品券</span>
                        <em style={{ float: 'right', fontStyle: 'normal' }}>￥9</em>
                    </p>
                    <p style={{ margin: '0 0.3125rem', padding: '0.4rem 0.6rem', borderBottom: '0.0625rem solid #ccc ' }}>
                        <span>红包</span>
                        <em style={{ float: 'right', fontStyle: 'normal' }}>￥0.9</em>
                    </p>
                    <p style={{ margin: '0 0.3125rem', padding: '0.4rem 0.6rem', borderBottom: '0.0625rem solid #ccc ' }}>
                        <span>商品实付</span>
                        <em style={{ float: 'right', fontStyle: 'normal' }}>￥39.9</em>
                    </p>
                    <p style={{ margin: '0 0.3125rem', padding: '0.4rem 0.6rem', borderBottom: '0.0625rem solid #ccc ' }}>
                        <span>配送费</span><span style={{ margin: '0 0.625rem', fontSize: '0.5rem', color: '#999' }}>实付满99包邮</span>
                        <em style={{ float: 'right', fontStyle: 'normal' }}>￥2.0</em>
                    </p>
                    <p style={{ margin: '0 0.3125rem', padding: '1rem 0.6rem', borderBottom: '0.0625rem solid #ccc ' }}>
                        <span></span><span style={{ margin: '0 0.625rem', fontSize: '0.5rem', color: '#999' }}></span>

                        <em style={{ float: 'right', fontStyle: 'normal', color: 'red' }}>￥9.9</em>
                    </p>



                </div>


            </div >
        )



    }
}

const mapStateToProps = (state) => ({



})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home_cart_list)





