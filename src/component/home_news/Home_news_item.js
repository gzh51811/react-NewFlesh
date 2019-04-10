import React from 'react'
import { Icon } from 'antd';
export default function Home_news_item(props) {
    var { data } = props

    return (
        <div >
            {/* 列表 */}
            <div className="big-wrap-item">
                <img className="article-img" src={data.titlePic} />
                {/* <img src="//static-as.missfresh.cn/frontend/discovery/static/img/player.951f539.png" width="44" height="44" /> */}
                <div className="article-info">
                    <div className="follow-user-item">
                        <img src={data.authorPhoto} />
                        <span className="user__name">{data.nickname}</span>
                    </div>
                    <p className="article-title">
                        {data.title}
                    </p>

                    <div className="article-tool">
                        <div className="tool-left">
                            <span className="article-tool-view">浏览 {data.fontReadNo}</span>
                        </div>

                        <div className="tool-right">
                            <Icon type="share-alt" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
