import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';

import '../css/home_cart.scss';

import { connect } from 'react-redux'
import Home_cart_recommend from '../component/home_cart/Home_cart_recommend';
import Home_cart_list from '../component/home_cart/Home_cart_list';



export class Home_cart extends Component {
    constructor() {
        super();

        this.state = {
            cartList: [1],

        };
    }




    onChange(value) {
        console.log('changed', value);
    }

    render() {
        return (
            <div className="home_cart" style={{ background: '#F5F5F5' }}>

                {this.state.cartList.length === 0 ?
                    <div
                        style={{
                            height: '40%',
                            textAlign: "center",
                            lineHeight: '10rem'

                        }}
                    >
                        您没有添加任何商品
                </div>
                    :
                    <Home_cart_list></Home_cart_list>
                }





                {/* 推荐商品 */}
                <div style={{ fontSize: '.5rem', background: '#F5F5F5', padding: '0.3rem 0.625rem 0' }}>推荐商品</div>
                <div>
                    <Home_cart_recommend />
                </div>

                <div style={{ position: "fixed", bottom: '1.2rem', width: '100%' }}>

                    <Row>
                        <Col span={16} style={{ textAlign: 'center', padding: '0.2667rem', fontSize: '0.4267rem', background: '#fff', color: '#222' }}>
                            合计：0.00 元
                        <span style={{ margin: '0 0.2667rem', fontSize: '0.2667rem', color: '#999' }}>包邮</span>
                        </Col>

                        <Col span={8} style={{ textAlign: 'center', padding: '0.2667rem', background: ' rgb(235, 22, 128)', color: '#fff' }}>
                            去结算
                            <Icon type="caret-right" style={{ fontSize: '16px', color: '#fff' }} />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps, Home_cart)


