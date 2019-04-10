import React, { Component } from 'react';
import 'antd/dist/antd.css';
import "../css/home_categroy.css";
import Hot from "../component/Hot";
import Fruit from "../component/Fruit";
import Dairy from "../component/Dairy";
import Ribai from "../component/Ribai";
import Snacks from "../component/Snacks";
import withAxios from '../hoc/withAxios';
// import { List, Avatar, Tabs, Select } from 'antd';

// const TabPane = Tabs.TabPane;
// const Option = Select.Option;List, Avatar, Tabs, List, Tabs Select,
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;
class Home_categroy extends Component {
    render() {
        // console.log('cat;', this);
        return <div className="home_categroy card-container" style={{ flex: 1 }}>
            {/* <List> */}
            <div className="home_header">
                <img src={require("../static/image/img_20190328224123677.png")} alt="" />
                <a href="javascript:;">
                    <img src={require('../static/image/search.png')} alt="" />
                    <p className="sosuo">搜索</p>
                </a>
            </div>
            {/* <div className=""> */}
            <Tabs className="mytabs" type="card" tabPosition="left" tabBarGutter={0} >
                <TabPane tab="热卖" key="1" >

                    <Hot mane={this.props}></Hot>
                </TabPane>
                <TabPane tab="会员精选" key="2" >
                    <p className="category-title" >美味零食蛋糕</p>

                    <p className="line"></p>
                </TabPane>
                <TabPane tab="水果" key="3">
                    <Fruit mane={this.props}></Fruit>
                </TabPane>
                <TabPane tab="蔬菜" key="4" >Content of Tab Pane 2</TabPane>
                <TabPane tab="肉蛋" key="5" >Content of Tab Pane 2</TabPane>
                <TabPane tab="水产" key="6" >Content of Tab Pane 2</TabPane>
                <TabPane tab="乳品" key="7" >
                    <Dairy></Dairy>
                </TabPane>
                <TabPane tab="零食" key="8" ><Snacks mane={this.props}></Snacks></TabPane>
                <TabPane tab="酒饮" key="9" >Content of Tab Pane 2</TabPane>
                <TabPane tab="轻食" key="10" >Content of Tab Pane 2</TabPane>
                <TabPane tab="速食" key="11" >Content of Tab Pane 2</TabPane>
                <TabPane tab="熟食" key="12" >Content of Tab Pane 2</TabPane>
                <TabPane tab="粮油" key="13" >Content of Tab Pane 2</TabPane>
                <TabPane tab="日百" key="14" > <Ribai mane={this.props}></Ribai></TabPane>
                {/* <TabPane></TabPane> */}
            </Tabs>
            {/* </List> */}

        </div >
    }
}

Home_categroy = withAxios(Home_categroy);
export default Home_categroy;