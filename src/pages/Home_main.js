import React,{Component} from 'react';
import 'antd/dist/antd.css';
import '../css/home_main.css';

class Home_main extends Component{
    render(){
        return <div className="home_main">
            <div className="home_header">
                <img src={require("../static/image/icon_img.png")} alt=""/>
                <a href="javascript:;">
                    <img src={require('../static/image/search.png')} alt=""/>
                    <p>搜索</p>
                </a>
            </div>
            
        </div>
    }
}


export default Home_main;