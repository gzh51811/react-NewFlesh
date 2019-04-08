import React, { Component } from 'react';
import '../css/goods.css';
import { Icon, Carousel } from 'antd';


class Goods extends Component {
    render() {
        return (<div className="Goods" style={{ flex: 1 }}>
            <div className="detailsTitle">
                <div className="spxq">商品详情</div>
            </div>
            {/* 内容 */}
            <div className="product-img-container">
                <Carousel autoplay>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                </Carousel>,

            </div>
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
                <div className="security product-safe-area">
                    <div className="security-tit">
                        <span className="security-tit-title">安心指纹</span>
                        <span className="security-tit-see">点击查看&gt;</span>
                    </div>
                    <div className="scroll-box">
                        <div className="security-item-wrap">
                            <div className="security-item">
                                <img src="https://image.missfresh.cn/3acaea400d1d4e4485fb4a8df941373d.png" alt=""></img>
                                <p className="item-text">经营证件</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="buyer-area">
                <div className="buyer-area-person">
                    <div className="flexbox">
                        <i className="buyer-area-person-tip"></i>
                        <div className="buyer-area-person-icon"><img src="https://image.missfresh.cn/6a763a4b19cf401081fb1dbe55a731a3.png" alt=""></img></div>
                        <div className="buyer-area-person-des"><h3>Risha</h3></div>


                    </div>
                    <div className="buyer-person-des"><p>用9年专注国内外日百用品，擅长对商品的品牌、质感、材质进行360度严苛筛选。</p></div>
                    <div className="product-buyer">
                        <div className="buyer-description">
                            <p className="marks marks-left">
                                <img src=""></img>
                            </p>
                            <ul className="commodity-details">
                                <li description-info="这款纸是维达新出的一款立体压花抽纸，质量跟之前的系列一样，但是纸张更加立体好看" class="list-item"><p class="list-item-text">这款纸是维达新出的一款立体压花抽纸，质量跟之前的系列一样，但是纸张更加立体好看</p>
                                </li>
                                <li description-info="维达家的纸都不用多说了，通过欧盟食品级检测，可以直接包裹食物，加工时不含可迁移性荧光增白剂，温和亲肤，用起来不刺激，感冒了擦鼻子，经常擦鼻子也不会红" className="list-item"><p className="list-item-text">维达家的纸都不用多说了，通过欧盟食品级检测，可以直接包裹食物，加工时不含可迁移性荧光增白剂，温和亲肤，用起来不刺激，感冒了擦鼻子，经常擦鼻子也不会红</p>
                                </li>
                            </ul>
                        </div></div>
                </div>
            </div>
            <div className="graphic-details-container">
                <div className="graphic-list-container">
                    <div className="title-list-container">
                        <div className="image-text">商品详情</div>
                        <ul className="list-container">
                            <li className="list-item list-point"><p className="list-item-text text-color">规格: 1提</p></li>
                            <li className="list-item list-point"><p className="list-item-text text-color">重量: 3层*110抽*6包</p></li>
                            <li className="list-item list-point"><p className="list-item-text text-color">包装: 袋装</p></li>
                            <li className="list-item list-point"><p className="list-item-text text-color">保质期: 1095</p></li>
                            <li className="list-item list-point"><p className="list-item-text text-color">贮存方法: 常温</p></li>
                        </ul>
                    </div>
                </div>
                <div className="instruction-list-container"></div>
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