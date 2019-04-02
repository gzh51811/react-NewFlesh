import React, { Component } from 'react';
import '../css/home_mine.scss'
import { NavLink } from 'react-router-dom';

import { Row, Col, Icon } from 'antd';

class Home_mine extends Component {
    render() {
        return (
            <div className="home_mine">

                <div className='header'>
                    <NavLink to={'/login'} >
                        <div className="btnlogin">
                            用户登录
                    </div>
                    </NavLink>
                </div>

                <div className="nav">

                    <Row>
                        <Col className="clo" span={6}>
                            <p>0</p>
                            <p>余额</p>
                        </Col>
                        <Col className="clo" span={6}>
                            <p>0</p>
                            <p>红包</p>
                        </Col>
                        <Col className="clo" span={6}>
                            <p>0</p>
                            <p>商品券</p>
                        </Col>
                        <Col className="clo" span={6}>
                            <p>0</p>
                            <p>积分兑换</p>
                        </Col>
                    </Row>
                </div>

                <div className="member">
                    <p className="plus">
                        <span className="qyi">会员权益</span>
                        <span className="ktmember">开通会员 <Icon type="right" /></span>
                    </p>
                    <p className="plus-money">
                        成为优享会员，预计1年将为你
                        <span className="pink">节省1121.30元 </span>
                    </p>
                </div>

                <div className="plus-items">

                    <Row>
                        <Col className="clo" span={6}>
                            <p><img src={[require("../img/cart1.png")]} alt="" /></p>
                            <p>会员专享价</p>
                        </Col>
                        <Col className="clo" span={6}>
                            <p><img src={[require("../img/cart2.png")]} alt="" /></p>
                            <p>1小时送达</p>
                        </Col>
                        <Col className="clo" span={6}>
                            <p><img src={[require("../img/cart3.png")]} alt="" /></p>
                            <p>专属客服</p>
                        </Col>
                        <Col className="clo" span={6}>
                            <p><img src={[require("../img/cart4.png")]} alt="" /></p>
                            <p>敬请期待</p>
                        </Col>
                    </Row>
                </div>



                {/* 轮播 */}
                <div className="activities-wrap">
                    <div className="activities-list ">
                        <div class="activities-item">
                            <img data-v-77e4bdfe="" src="https://j-image.missfresh.cn/img_20190226163440502.png" class="activities-img" />
                        </div>
                        <div class="activities-item">
                            <img data-v-77e4bdfe="" src="https://j-image.missfresh.cn/img_20190310225020485.png" class="activities-img"></img>
                        </div>
                        <div class="activities-item">
                            <img data-v-77e4bdfe="" src="https://j-image.missfresh.cn/img_20190325000313662.jpg" class="activities-img"></img>
                        </div>
                        <div class="activities-item">
                            <img data-v-77e4bdfe="" src="https://j-image.missfresh.cn/img_20190331235644971.png" class="activities-img"></img>
                        </div>
                    </div>
                </div>


                {/* 订单 以下*/}
                <div className="minelist">
                    <div className="minelist_item">
                        我的订单
                        <Icon type="right" style={{ float: "right", color: '#ccc' }} />
                    </div>
                    <div className="minelist_item">
                        我的地址
                        <Icon type="right" style={{ float: "right", color: '#ccc' }} />
                    </div>
                    <div className="minelist_item">
                        账户与安全
                        <Icon type="right" style={{ float: "right", color: '#ccc' }} />
                    </div>
                    <div className="minelist_item">
                        客户与帮助
                        <Icon type="right" style={{ float: "right", color: '#ccc' }} />
                    </div>
                    <div className="minelist_item">
                        意见反馈
                        <Icon type="right" style={{ float: "right", color: '#ccc' }} />
                    </div>
                    <div className="minelist_item">
                        关于我们
                        <Icon type="right" style={{ float: "right", color: '#ccc' }} />
                    </div>

                </div>


            </div>)
    }
}


export default Home_mine;