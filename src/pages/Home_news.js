import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../css/Home_news.scss';
import withAxios from '../hoc/withAxios'

import Home_news_item from '../component/home_news/Home_news_item'
class Home_news extends Component {
    constructor() {
        super();

        this.state = {
            current: '0',
            categorys: [],
            newlist: [],
        }
    }

    componentWillMount() {
        this.props.axios.get('/reacthomenews').then(res => {
            var { data: { data: { categorys } } } = res;
            this.setState({
                categorys
            })

        });

        this.props.axios.get('/reacthomenews/list').then(res => {
            var { data: { data } } = res;
            this.setState({ newlist: data })
          
        });
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
                <nav className='news_nav'>
                    <Menu
                        style={{ margin: '10px 0' }}
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >

                        {
                            this.state.categorys.map((item, index) =>

                                <Menu.Item key={index}>
                                    {item.name}
                                </Menu.Item>
                            )
                        }

                    </Menu>
                </nav>



                {/* <div >
                                <h2 className="like">{item.name}<span> |给你准备了这些，还合胃口</span></h2>
                            </div> */}

                {
                    this.state.newlist.map((item, index) =>


                        <section className="newbody" key={index}>
                            <div >
                                <h2 className="like">{item.name}</h2>
                            </div>


                            {/* {console.log(item.articles)} */}
                            {

                                item.articles.map((itemlist, i) =>

                                    (itemlist.type == 2) ?
                                        <div key={i}>
                                            <div className="big-wrap">
                                                <div className="article-card">
                                                    <div className="follow-user-item ">
                                                        <img src={itemlist.authorPhoto} ></img>
                                                        <span className="user__name ">{itemlist.nickname}</span>
                                                    </div>

                                                    <div className="article__cover">
                                                        <img src={itemlist.titlePic} />
                                                    </div>
                                                </div>

                                                <h3 >{itemlist.title}</h3>
                                                <div className="article__controls">
                                                    <div className="article__reading">浏览 {itemlist.fontReadNo}</div>
                                                    <div className="control-btn-area">
                                                        <div className="article__collection"
                                                            style={{ display: "block" }}>
                                                            收藏{itemlist.fontCollectNo}</div>
                                                        <div className="article__btn-share">
                                                            分享</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="line-1px"></p>

                                        </div>
                                        :
                                        <div style={{ marginBottom: '30px' }} key={i}>
                                            <Home_news_item data={itemlist} />
                                        </div>
                                    // console.log(itemlist.type))
                                )}
                        </section>
                    )
                }

            </div >
        );
    }

}

Home_news = withAxios(Home_news);
export default Home_news;