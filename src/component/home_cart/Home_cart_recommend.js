import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Icon } from 'antd';



export class Home_cart_recommend extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    addcart() {
        console.log('添加购物车')
    }


    render() {
        return (
            <section style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                flexWrap: "wrap",
                htight: 'auto',
             
                padding: '0.625rem 0'
            }}>

                <div style={{
                    textAlign: 'center',
                    width: '45%',
                    borderRadius: '0.625rem',
                    margin: ' 0.45rem',
                    background: '#fff'

                }}>
                    <img style={{ width: '80%', margin: '0.625rem auto' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                    <div>
                        <p style={{
                            padding: '0 0.625rem', margin: 0,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            color: '#333'
                        }}>冷鲜猪鲜排骨250g香甜keghdfg</p>

                        <p style={{
                            padding: '0 0.625rem', margin: 0,
                            fontSize: '0.625rem',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                        }}>做法多样 尤其拿来糖醋超赞</p>
                    </div>

                    <div style={{ overflow: 'hidden', padding: ' 0.3125rem 0.625rem 0.75rem' }}>
                        <span style={{ fontSize: "0.9rem", color: 'red', float: 'left' }}>价格：99.00</span>
                        <Icon type="shopping-cart" onClick={this.addcart} style={{ float: 'right', fontSize: '1.5625rem', color: '#08c' }} />
                    </div>
                </div>


                <div style={{
                    textAlign: 'center',
                    width: '45%',
                    borderRadius: '0.625rem',
                    margin: ' 0.45rem',
                    background: '#fff'

                }}>
                    <img style={{ width: '80%', margin: '0.625rem auto' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                    <div>
                        <p style={{
                            padding: '0 0.625rem', margin: 0,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            color: '#333'
                        }}>冷鲜猪鲜排骨250g香甜keghdfg</p>

                        <p style={{
                            padding: '0 0.625rem', margin: 0,
                            fontSize: '0.625rem',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                        }}>做法多样 尤其拿来糖醋超赞</p>
                    </div>

                    <div style={{ overflow: 'hidden', padding: ' 0.3125rem 0.625rem 0.75rem' }}>
                        <span style={{ fontSize: "0.9rem", color: 'red', float: 'left' }}>价格：99.00</span>
                        <Icon type="shopping-cart" onClick={this.addcart} style={{ float: 'right', fontSize: '1.5625rem', color: '#08c' }} />
                    </div>
                </div>


                <div style={{
                    textAlign: 'center',
                    width: '45%',
                    borderRadius: '0.625rem',
                    margin: ' 0.45rem',
                    background: '#fff'

                }}>
                    <img style={{ width: '80%', margin: '0.625rem auto' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                    <div>
                        <p style={{
                            padding: '0 0.625rem', margin: 0,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            color: '#333'
                        }}>冷鲜猪鲜排骨250g香甜keghdfg</p>

                        <p style={{
                            padding: '0 0.625rem', margin: 0,
                            fontSize: '0.625rem',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                        }}>做法多样 尤其拿来糖醋超赞</p>
                    </div>

                    <div style={{ overflow: 'hidden', padding: ' 0.3125rem 0.625rem 0.75rem' }}>
                        <span style={{ fontSize: "0.9rem", color: 'red', float: 'left' }}>价格：99.00</span>
                        <Icon type="shopping-cart" onClick={this.addcart} style={{ float: 'right', fontSize: '1.5625rem', color: '#08c' }} />
                    </div>
                </div>


                <div style={{
                    textAlign: 'center',
                    width: '45%',
                    borderRadius: '0.625rem',
                    margin: ' 0.45rem',
                    background: '#fff'

                }}>
                    <img style={{ width: '80%', margin: '0.625rem auto' }} src="https://image.missfresh.cn/cb102a858d204060a43c3a3ab1637219.jpg?iopcmd=convert&amp;dst=webp" />
                    <div>
                        <p style={{
                            padding: '0 0.625rem', margin: 0,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            color: '#333'
                        }}>冷鲜猪鲜排骨250g香甜keghdfg</p>

                        <p style={{
                            padding: '0 0.625rem', margin: 0,
                            fontSize: '0.625rem',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                        }}>做法多样 尤其拿来糖醋超赞</p>
                    </div>

                    <div style={{ overflow: 'hidden', padding: ' 0.3125rem 0.625rem 0.75rem' }}>
                        <span style={{ fontSize: "0.9rem", color: 'red', float: 'left' }}>价格：99.00</span>
                        <Icon type="shopping-cart" onClick={this.addcart} style={{ float: 'right', fontSize: '1.5625rem', color: '#08c' }} />
                    </div>
                </div>




            </section>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home_cart_recommend)
