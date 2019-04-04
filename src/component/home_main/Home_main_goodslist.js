import React from 'react'


function Home_main_goodslist() {
    return (
        <div>
            <div className="banner-img" style={{ width: '100%' }}>
                <img src="https://j-image.missfresh.cn/mis_img_20190226141252067.jpg?mryxw=750&amp;mryxh=142"
                    className="image-view divider-banner" style={{ width: '100%' }} />
            </div>

            <div className="checkitemli">
                <div >
                    <img className="imgs" src="https://fms-image.missfresh.cn/02e6b07f9ad64369a25a71179eb49627.jpg?iopcmd=thumbnail&amp;type=4&amp;width=200" />
                    <div className="conter" >
                        <p className="p1"> 鸡蛋就都几点男法师打发的</p>
                        <p className="p2">鸡蛋就都几点男法师打的</p>
                        <div className="price">
                            <span style={{ color: 'red', }}>￥99.00</span>
                        </div>
                    </div>
                </div>
                <img className="cartbtnimg" src={[require('../../static/image/cart1.png')]} />
            </div>
            <div className="checkitemli">
                <div >
                    <img className="imgs" src="https://fms-image.missfresh.cn/02e6b07f9ad64369a25a71179eb49627.jpg?iopcmd=thumbnail&amp;type=4&amp;width=200" />
                    <div className="conter" >
                        <p className="p1"> 鸡蛋就都几点男法师打发的</p>
                        <p className="p2">鸡蛋就都几点男法师打的</p>
                        <div className="price">
                            <span style={{ color: 'red', }}>￥99.00</span>
                        </div>
                    </div>
                </div>
                <img className="cartbtnimg" src={[require('../../static/image/cart1.png')]} />
            </div>
            <div className="checkitemli">
                <div >
                    <img className="imgs" src="https://fms-image.missfresh.cn/02e6b07f9ad64369a25a71179eb49627.jpg?iopcmd=thumbnail&amp;type=4&amp;width=200" />
                    <div className="conter" >
                        <p className="p1"> 鸡蛋就都几点男法师打发的</p>
                        <p className="p2">鸡蛋就都几点男法师打的</p>
                        <div className="price">
                            <span style={{ color: 'red', }}>￥99.00</span>
                        </div>
                    </div>
                </div>
                <img className="cartbtnimg" src={[require('../../static/image/cart1.png')]} />
            </div>

        </div>

    )
}

export default Home_main_goodslist
