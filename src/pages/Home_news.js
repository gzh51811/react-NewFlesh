import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../css/Home_news.scss';

import Home_news_item from '../component/home_news/Home_news_item'
class Home_news extends Component {

    state = {
        current: '0',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div className="Home_news">
                <nav class='news_nav'>
                    <Menu
                        style={{ margin: '10px 0' }}
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="0">
                            精选
                </Menu.Item>
                        <Menu.Item key="1">
                            快手食谱
                </Menu.Item>
                        <Menu.Item key="2">
                            甜点饮品
                </Menu.Item>
                        <Menu.Item key="3">
                            生活百科
                </Menu.Item>
                    </Menu>
                </nav>

                <section className="newbody">




                    <div>
                        <h2 className="like">猜你喜欢 <span >|给你准备了这些，还合胃口</span></h2>
                    </div>



                    <div>
                        <div className="big-wrap">
                            <div className="article-card">
                                <div className="follow-user-item ">
                                    <img src="https://j-image.missfresh.cn/img_20180616191919039.jpg" ></img>
                                    <span className="user__name ">小羽私厨</span>
                                </div>

                                <div className="article__cover">
                                    <img src='https://j-image.missfresh.cn/img_20190328144134985.png?iopcmd=convert&dst=webp' />
                                </div>
                            </div>

                            <h3 >【鸡汁百叶包】这么一小碗，好吃惨了</h3>
                            <div className="article__controls">
                                <div className="article__reading">浏览 23559</div>
                                <div className="control-btn-area">
                                    <div className="article__collection"
                                        style={{ display: "block" }}>
                                        收藏</div>
                                    <div className="article__btn-share">
                                        分享</div>
                                </div>
                            </div>
                        </div>
                        <p className="line-1px"></p>

                        <div style={{ marginBottom: '30px' }}>
                            <Home_news_item />
                        </div>


                    </div>
                </section>
            </div >
        );
    }

}


export default Home_news;