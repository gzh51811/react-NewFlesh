import React, { Component } from 'react'
import withAxios from '../../hoc/withAxios'
import store from '../../store'
import { connect } from 'react-redux'
import { Icon } from 'antd';



export class Home_cart_recommend extends Component {
    constructor() {
        super();
        this.state = {
            tuijian: [
                {
                    user_id: "5ca4d2718d3e966680c9a053",
                    goods_id: "5ca4a46b8d3e966680c997e11",
                    name: "卡士时尚鲜酪乳100g*3 ",
                    image: 'https://image.missfresh.cn/93782014d9a8409e975372d5703aaa37.jpg',
                    price: 9.7,
                    number: 1
                },
                {
                    user_id: "5ca4d2718d3e966680c9a053",
                    goods_id: "5ca4a46b8d3e966680c997e12",
                    name: "光明健能发酵乳100g*8",
                    image: 'https://image.missfresh.cn/7b97cc5074fc4f43a02045922ae18623.jpg',
                    price: 21.7,
                    number: 1
                },
                {
                    user_id: "5ca4d2718d3e966680c9a053",
                    goods_id: "5ca4a46b8d3e966680c997e13",
                    name: "从化鲜鸡蛋20枚",
                    image: 'https://image.missfresh.cn/3b89f64432be48adb703072db9ff1578.jpg',
                    price: 19.7,
                    number: 1
                },
                {
                    user_id: "5ca4d2718d3e966680c9a053",
                    goods_id: "5ca4a46b8d3e966680c997e14",
                    name: "库尔勒香梨5个475g起",
                    image: 'https://image.missfresh.cn/f77e83ae08a94b6494f42646f4ab32ea.jpg',
                    price: 32.7,
                    number: 1
                },
            ]
        }
    }

    addcart(item) {

        this.props.axios.post('/cart/addcart', { params: item }).then(res => {
            let { data: { data } } = res

            console.log(data)
            store.dispatch({ type: 'addcart', payload: data })
        });
    }


    render() {
        return (
            <section className="cart_recommet">
                {
                    this.state.tuijian.map(item =>

                        <div className="cart_recommet_item" key={item.goods_id} >
                            <img style={{ width: '80%', margin: ' auto' }} src={item.image} />
                            <div>
                                <p className="item1">{item.name}</p>

                                <p className="item2">做法多样 尤其拿来糖醋超赞</p>
                            </div>

                            <div style={{ overflow: 'hidden', padding: '0.2333rem 0.48rem' }}>
                                <span style={{ lineHeight: '0.2333rem', fontSize: "0.4rem", color: 'red', float: 'left' }}>价格：{item.price}</span>
                                <img onClick={this.addcart.bind(this, item)} className="cartbtnimg" src={[require('../../static/image/cart1.png')]} />
                            </div>
                        </div>
                    )
                }



            </section>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

Home_cart_recommend = withAxios(Home_cart_recommend)
export default connect(mapStateToProps, mapDispatchToProps)(Home_cart_recommend)
