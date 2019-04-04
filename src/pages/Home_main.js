import React, { Component } from 'react';

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

                <nav>

                </nav>


                <Home_main_goodslist></Home_main_goodslist>

            </div>)
    }
}

Home_main = withRouter(Home_main)
export default Home_main;