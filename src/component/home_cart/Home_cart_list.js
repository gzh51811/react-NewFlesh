import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputNumber } from 'antd';


import { Checkbox } from 'zent'
import 'zent/css/index.css'

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
                    className="checkGroup"
                    value={checkedList}
                    onChange={this.handleChange.bind(this)}
                >
                    {ITEMS.map(item => {

                        return (
                            <div key={item} className="checkitemli">

                                <Checkbox key={item} value={item} >
                                    <div >

                                        <img className="imgs" src="https://fms-image.missfresh.cn/02e6b07f9ad64369a25a71179eb49627.jpg?iopcmd=thumbnail&amp;type=4&amp;width=200" />
                                        <div className="conter" >
                                            <p className="p1"> 鸡蛋就都几点男法师打发的</p>
                                            <p className="p2">鸡蛋就都几点男法师打的</p>
                                            <div className="price">
                                                <span style={{ color: 'red', }}>￥99.00</span>
                                            </div>
                                        </div>
                                    </div>

                                </Checkbox>
                                <InputNumber className="inputnumber" size="small" min={1} max={10} defaultValue={1} onChange={this.onChange} />

                            </div>
                        )
                    })}

                </CheckboxGroup>

                <div className='allprice'>
                    <p >
                        <span>商品总价</span>
                        <i >￥99.9</i>
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
                        <i >￥39.9</i>
                    </p>
                    <p >
                        <span>配送费</span><span style={{ margin: '0 0.625rem', fontSize: '0.1rem', color: '#999' }}>实付满99包邮</span>
                        <i >￥2.0</i>
                    </p>
                    <p >
                        <span></span><span style={{ margin: '0 0.625rem', fontSize: '0.5rem', color: '#999' }}></span>

                        <i style={{ color: 'red' }}>￥9.9</i>
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





