import React, { Component } from 'react';

// import { Checkbox } from 'zent'
// import 'zent/css/index.css'

import '../css/home_main.scss';

// import Home_main_goodslist from '../component/home_main/Home_main_goodslist.js'
import Home_tab from '../component/home_main/Home_tab.js'
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
                    <Home_tab> </Home_tab>
                </nav>


                {/* <Home_main_goodslist></Home_main_goodslist> */}

            </div>)
    }
}

// Home_main = withRouter(Home_main)
export default Home_main;