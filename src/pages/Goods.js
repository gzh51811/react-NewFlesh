import React, { Component } from 'react';
import '../css/goods.css';
import { Icon } from 'antd';


class Goods extends Component {
    render() {
        return (<div className="Goods" style={{ flex: 1 }}>
            <div className="detailsTitle">
                <div className="spxq">商品详情</div>
            </div>
            {/* 内容 */}
            <div className="product-describe">
                <p className="subtitle-text">凹凸间隙中满满都是质感</p>
                <p className="sub-title">【6包】维达棉韧压花抽纸110抽</p>
                <div className="product-item-price">
                    <div className="price-left">
                        <p className="up-price" style={{ color: '#ff4891' }}>￥29.8</p>
                        <p className="left-price" >￥15.9</p>
                    </div>
                    <div className="down-area">已售2185份</div>
                </div>
                <div className="product-attrs">
                    &nbsp; &nbsp;&nbsp;·&nbsp;产地中国  &nbsp; &nbsp;&nbsp;·&nbsp;次日达  &nbsp; &nbsp;&nbsp;·&nbsp;实付满69包邮
                </div>
            </div>
            <div className="product-share-info">
                <div className="product-redpack">
                    <img className="product-redpack-img" src={require('../static/image/img_20171029215450695.png')}></img>
                    <span style={{ padding: '0px .533333rem 0px 0px' }}>该商品分享可领49减10红包
                          </span>
                    <i></i>
                    <span>去分享&gt;</span>
                </div>
                <p className="share-count">已经有9810人分享了该商品</p>
            </div>
            <div className="safe-container">
                <div className="product-safe-area">
                    <div className="security-tit">
                        <span className="security-tit-title">安心指纹</span>
                        <span className="security-tit-see">点击查看&gt;</span>
                    </div>
                    <div className="security-box">


                    </div>
                </div>

            </div>
            {/* 加入购物车 */}
            <div className="product-bar-footer-container">
                <div className="image-spot-containerproduct-image-spot">
                    <Icon className="icon-cart" type="shopping-cart" style={{ fontSize: '32px' }} />
                </div>
                <div className="shopping-cart">
                    加入购物车
                </div>
            </div>
        </div>)

    }

}

export default Goods;