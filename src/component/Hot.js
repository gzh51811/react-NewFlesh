import React, { Component } from 'react';

class Hot extends Component {
    render() {
        return (<div>
            <p className="category-title" >今日秒杀</p>

            <p className="line"></p>
            <div className="goodslist ">

                <div className="somelist " >
                    <div className="product-img-wrap">
                        <img src={require('../static/image/222.webp')} className="product-img"></img>
                        <div className="product-promote-tag" >
                            限每人2份
                                    </div>
                    </div>
                    <div className="product-item-right">
                        <div className="product-title">特仑苏纯牛奶250ml*12</div>
                        <div className="product-subtitle">荣获 IDF世界乳业创新大奖</div>
                        <div className="product-bottom flex">
                            <div className="product-prices flex">
                                <span className="sub-price">¥55.9</span>
                            </div>
                            <div className="product-prices flex">
                                <span className="main-price" >¥69.9</span>
                            </div>
                        </div>
                        <div className="product-ctrl">
                            <img src={require('../static/image/new-cart.a16f026.png')} className="product-addcart-img"></img>
                        </div>
                    </div>


                </div>
            </div>
        </div>)


    }

}
export default Hot;