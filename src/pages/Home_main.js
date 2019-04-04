import React, { Component } from 'react';

// import { Carousel } from 'antd';

import '../css/home_main.scss';

import Home_main_goodslist from '../component/home_main/Home_main_goodslist.js'
class Home_main extends Component {
    render() {
        return (
            <div className="home_main">
                <div className="home_header">
                    <img src={require("../static/image/icon_img.png")} alt="" />
                    <a href="javascript:;">
                        <img src={require('../static/image/search.png')} alt="" />
                        <p>搜索</p>
                    </a>
                </div>

                {/* {小导航} */}
                <section className="minnav">
                    <ul>
                        <li>画册</li>
                        <li>画册</li>
                        <li>画册</li>
                        <li>画册</li>
                    </ul>
                </section>


                {/* 保障 */}
                <section className="recommend-title">
                    <div className="recommend-text">
                        <img src="https://j-image.missfresh.cn/img_20170627185311186.png" />
                        <em>优鲜严选</em>
                    </div>
                    <div className="recommend-text">
                        <img src="https://j-image.missfresh.cn/img_20170627184654084.png" />
                        <em>安心检测</em>
                    </div>
                    <div className="recommend-text">
                        <img src="https://j-image.missfresh.cn/img_20170718194948016.png" />
                        <em>赔付保障</em>
                    </div>
                </section>


                {/* 导航 */}
                <nav className="main-nav">
                    <div className="lantern-item">
                        <div className="lantern-item-img">
                            <img className='item-img' src={[require('../static/image/nav1.png')]} />
                        </div>
                        <p>本周新品</p>
                    </div>
                    <div className="lantern-item">
                        <div className="lantern-item-img">
                            <img className='item-img' src={[require('../static/image/nav2.png')]} />
                        </div>
                        <p>邀请有礼</p>
                    </div>
                    <div className="lantern-item">
                        <div className="lantern-item-img">
                            <img className='item-img' src={[require('../static/image/nav3.png')]} />
                        </div>
                        <p>每日签到</p>
                    </div>
                    <div className="lantern-item">
                        <div className="lantern-item-img">
                            <img className='item-img' src={[require('../static/image/nav4.png')]} />
                        </div>
                        <p>凑单专区</p>
                    </div>
                    <div className="lantern-item">
                        <div className="lantern-item-img">
                            <img className='item-img' src={[require('../static/image/nav5.png')]} />
                        </div>
                        <p>开通会员</p>
                    </div>
                </nav>

                {/* 两张banner图 */}
                <div className="card-wrap">
                    <img src="https://j-image.missfresh.cn/img_20190115153812265.png" class="image-view" />
                    <img src="https://j-image.missfresh.cn/img_20190115153756830.png" class="image-view" />
                </div>

                <Home_main_goodslist></Home_main_goodslist>

            </div>)
    }
}

// Home_main = withRouter(Home_main)
export default Home_main;