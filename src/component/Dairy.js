
import React, { Component } from 'react';
import withAxios from '../hoc/withAxios';
// @withAxios
class Dairy extends Component {
    constructor() {
        super();
        this.state = {
            datalist: []
        }

        // this.gotoGoods = this.gotoGoods.bind(this);
    }
    // console.log(this)
    async componentDidMount() {
        // 使用axios
        let { data } = await this.props.axios.get('/goodslist/category', {
            params: {
                catagory: '乳品',
                act: 'goods',
                op: 'goods_list',
                keyword: '',
                page: 10,
                curpage: 1,
                // limit: 5
            }
        });

        console.log(data.data);


        this.setState({
            datalist: data.data
        });


    }
    render() {
        return (<div>
            <p className="category-title" >常温牛奶</p>

            <p className="line"></p>
            <div className="goodslist ">

                <div className="somelist " >
                    {
                        this.state.datalist.map(goods => {
                            return (<div style={{ overflow: 'hidden', }} key={goods._id} className="bigbox">
                                <div className="product-img-wrap">
                                    <img src={require(`../img/imgages/${goods.image}`)} className="product-img"></img>

                                </div>
                                <div className="product-item-right">
                                    <div className="product-title">{goods.name}</div>
                                    <div className="product-subtitle">{goods.subtitle}</div>

                                    <div className="product-bottom flex">
                                        <div className="product-prices flex">
                                            <span className="sub-price">¥{goods.price}</span>
                                        </div>
                                        <div className="product-prices flex">
                                            <span className="main-price" >¥{goods.sales_volume}</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="product-ctrl">
                                    <img src={require('../static/image/new-cart.a16f026.png')} className="product-addcart-img"></img>
                                </div>
                            </div>)

                        })





                    }
                </div>

            </div>
        </div>)


    }


}

Dairy = withAxios(Dairy);
export default Dairy;