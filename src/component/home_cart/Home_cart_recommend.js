import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Icon } from 'antd';



export class Home_cart_recommend extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    addcart() {
        console.log('添加购物车')
    }


    render() {
        return (
            <section className="cart_recommet">

                <div className="cart_recommet_item" >
                    <img style={{ width: '80%', margin: ' auto' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                    <div>
                        <p className="item1">冷鲜猪鲜排骨250g香甜keghdfg</p>

                        <p className="item2">做法多样 尤其拿来糖醋超赞</p>
                    </div>

                    <div style={{ overflow: 'hidden', padding: '0.2333rem 0.48rem' }}>
                        <span style={{ lineHeight: '0.2333rem', fontSize: "0.4rem", color: 'red', float: 'left' }}>价格：99.00</span>
                        <img className="cartbtnimg" src={[require('../../img/cart1.png')]} />
                    </div>
                </div>


                <div className="cart_recommet_item" >
                    <img style={{ width: '80%', margin: ' auto' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                    <div>
                        <p className="item1">冷鲜猪鲜排骨250g香甜keghdfg</p>

                        <p className="item2">做法多样 尤其拿来糖醋超赞</p>
                    </div>

                    <div style={{ overflow: 'hidden', padding: '5px 18px' }}>
                        <span style={{ fontSize: "0.4rem", color: 'red', float: 'left' }}>价格：99.00</span>
                        <Icon type="shopping-cart" onClick={this.addcart} style={{ float: 'right', fontSize: '.5625rem', color: '#08c' }} />
                    </div>
                </div>



                <div className="cart_recommet_item" >
                    <img style={{ width: '80%', margin: ' auto' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                    <div>
                        <p className="item1">冷鲜猪鲜排骨250g香甜keghdfg</p>

                        <p className="item2">做法多样 尤其拿来糖醋超赞</p>
                    </div>

                    <div style={{ overflow: 'hidden', padding: '5px 18px' }}>
                        <span style={{ fontSize: "0.4rem", color: 'red', float: 'left' }}>价格：99.00</span>
                        <Icon type="shopping-cart" onClick={this.addcart} style={{ float: 'right', fontSize: '.5625rem', color: '#08c' }} />
                    </div>
                </div>



                <div className="cart_recommet_item" >
                    <img style={{ width: '80%', margin: ' auto' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                    <div>
                        <p className="item1">冷鲜猪鲜排骨250g香甜keghdfg</p>

                        <p className="item2">做法多样 尤其拿来糖醋超赞</p>
                    </div>

                    <div style={{ overflow: 'hidden', padding: '5px 18px' }}>
                        <span style={{ fontSize: "0.4rem", color: 'red', float: 'left' }}>价格：99.00</span>
                        <Icon type="shopping-cart" onClick={this.addcart} style={{ float: 'right', fontSize: '.5625rem', color: '#08c' }} />
                    </div>
                </div>



            </section>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps, Home_cart_recommend)
