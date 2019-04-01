import React, { Component } from 'react';
import 'antd/dist/antd.css';
import "../css/home_categroy.css";
// import { List, Avatar, Tabs, Select } from 'antd';

// const TabPane = Tabs.TabPane;
// const Option = Select.Option;List, Avatar, Tabs, List, Tabs Select,
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
class Home_categroy extends Component {
    render() {
        return <div className="home_categroy" style={{ flex: 1 }}>
            {/* <List> */}
            <Tabs type="card" tabPosition="left" tabBarGutter={0} >
                <TabPane tab="热卖" key="1" >
                    <div>
                        <p className="category-title" >今日秒杀</p>
                    </div>
                    <p className="line"></p>
                    <div className="goodslist">
                        {/* <ul className="somelist" > */}
                        <div className="somelist" >
                            <li className="product-img-wrap">
                                <img src="https://image.missfresh.cn/4b498fa810f74696986f4b0434458258.jpg?iopcmd=convert&dst=webp" className="product-img"></img>
                                <div className="product-promote-tag" >
                                    限每人2份
                                    </div>
                            </li>
                        </div>
                        {/* <li></li> */}
                        {/* <li></li> */}
                        {/* </ul> */}
                    </div>
                </TabPane>
                <TabPane tab="会员精选" key="2" >Content of Tab Pane 2</TabPane>
                <TabPane tab="水果" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
            {/* </List> */}

        </div>
    }
}


export default Home_categroy;