import React,{Component} from 'react';
// import 'antd/dist/antd.css';
import '../css/home_main.css';

import {withRouter} from 'react-router-dom';
class Home_main extends Component{
    constructor(){
        super();
        this.state = {

        }
        this.toSearch = this.toSearch.bind(this);
    }

    toSearch(){
        console.log(this);
        this.props.history.push('/search');
    }

    render(){
        return <div className="home_main">
            <div className="home_header">
                <img src={require("../static/image/icon_img.png")} alt=""/>
                <a href="javascript:;" onClick={this.toSearch}>
                    <img src={require('../static/image/search.png')} alt=""/>
                    <p>搜索</p>
                </a>
            </div>
            <div className="header_nav">
                
            </div>
        </div>
    }
}

Home_main = withRouter(Home_main)
export default Home_main;