import React, { Component } from 'react';
import '../../css/home_tab.scss';
import { Tabs, Radio } from 'antd';
import Home_main_goodslist from './Home_main_goodslist.js'
// import Hot from "../Hot";

const TabPane = Tabs.TabPane;

class Home_tab extends Component {
    render() {
        return (


            <div className="home_tab">

                <Tabs
                    defaultActiveKey="1"
                    tabBarGutter={0}
                // style={{ height: 2.4rem }}
                >
                    <TabPane tab="热卖" key="1">
                        <div className='picture'>
                            <img src={require("../../img/img_20190404235328878.jpg")}></img>
                        </div>
                        <section className="recommend-title">
                            <div className="recommend-text">
                                <img src={require("../../img/img_20170627185311186.png")}></img>
                                <em>优鲜严选</em>
                            </div>
                            <div className="recommend-text">
                                <img src={require("../../img/img_20170627184654084.png")}></img> <em>安心检测</em>
                            </div>
                            <div className="recommend-text">
                                <img src={require("../../img/img_20170718194948016.png")}></img> <em>赔付保障</em>
                            </div>
                        </section>
                        <p className="category-border"></p>
                        <section className="prdCard-wrap">
                            <img src={require("../../img/img_20180409221722548.png")} alt="" className="bgImg"></img>
                            <div className="category-wrap">
                                <div className="lantern-wrap lantern-five">
                                    <div className="lantern-item">
                                        <div className="lantern-item-img">
                                            <img src={require("../../img/img_20181127211810194.png")} className="image-view" ></img>
                                        </div>
                                        <p>本周新品</p>
                                    </div>
                                    <div className="lantern-item">
                                        <div className="lantern-item-img">
                                            <img src={require("../../img/img_20181127211810194.png")} className="image-view" ></img>
                                        </div>
                                        <p>邀请有礼</p>
                                    </div>
                                    <div className="lantern-item">
                                        <div className="lantern-item-img">
                                            <img src={require("../../img/img_20181127211810194.png")} className="image-view" ></img>
                                        </div>
                                        <p>每日签到</p>
                                    </div>
                                    <div className="lantern-item">
                                        <div className="lantern-item-img">
                                            <img src={require("../../img/img_20181127211810194.png")} className="image-view" ></img>
                                        </div>
                                        <p>凑单专区</p>
                                    </div>
                                    <div className="lantern-item">
                                        <div className="lantern-item-img">
                                            <img src={require("../../img/img_20181127211810194.png")} className="image-view" ></img>
                                        </div>
                                        <p>开通会员</p>
                                    </div>
                                </div>
                                <div className="card-wrap">
                                    <img src="https://j-image.missfresh.cn/img_20190115153812265.png" className="image-view" ></img><img src="https://j-image.missfresh.cn/img_20190115153756830.png" className="image-view" ></img>
                                </div>

                            </div>
                        </section>
                        <div className="all-products-wrap" ></div>
                        {/* <Hot></Hot> */}
                        <Home_main_goodslist></Home_main_goodslist>
                    </TabPane>
                    <TabPane tab="会员精选" key="2">
                        <div className="banner-img" style={{ height: "2.186667rem", width: "100%" }}><img src="https://j-image.missfresh.cn/mis_img_20190405005626706.jpg?mryxw=1125&amp;mryxh=246" className="image-view divider-banner" style={{ height: "100%", width: "100%" }} ></img>
                        </div>
                    </TabPane>
                    <TabPane tab="水果" key="3">Content of tab 3</TabPane>
                    <TabPane tab="蔬菜" key="4">Content of tab 4</TabPane>
                    <TabPane tab="肉蛋" key="5">Content of tab 5</TabPane>
                    <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                    <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                    <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                    <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                    <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                    <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
                </Tabs>
            </div >
        )
    }
}



export default Home_tab;