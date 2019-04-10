import React, { Component } from 'react';
import withAxios from '../hoc/withAxios';
// import { Checkbox } from 'zent'
// import 'zent/css/index.css'

// import { Carousel } from 'antd';

import '../css/home_main.scss';

// import Home_main_goodslist from '../component/home_main/Home_main_goodslist.js'
import Home_tab from '../component/home_main/Home_tab.js'
class Home_main extends Component {
    render() {
        console.log(this);
        return (
            <div className="home_main">
                <div className="home_header">
                    <img src={require("../static/image/icon_img.png")} alt="" />
                    <a href="javascript:;">
                        <img src={require('../static/image/search.png')} alt="" />
                        <p>搜索</p>
                    </a>
                </div>

                <nav style={{ overflow: "auto" }}>
                    <Home_tab mane={this.props}> </Home_tab>
                </nav>

                {/* 两张banner图 */}
                <div className="card-wrap">
                    <img src="https://j-image.missfresh.cn/img_20190115153812265.png" class="image-view" />
                    <img src="https://j-image.missfresh.cn/img_20190115153756830.png" class="image-view" />
                </div>

                {/* <Home_main_goodslist></Home_main_goodslist> */}

            </div>)
    }
}

// Home_main = withRouter(Home_main)
Home_main = withAxios(Home_main);
export default Home_main;