import React, { Component } from 'react';
import withAxios from '../../hoc/withAxios';

class Home_main_goodslist extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            datalist: []
        }
        // console.log('22', this)
        this.gotoGoods = this.gotoGoods.bind(this);
    }
    // console.log(this)
    async componentDidMount() {
        // 使用axios
        // console.log('22', this)
        let { data } = await this.props.axios.get('/goodslist/category', {
            params: {
                catagory: '酒饮',
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


    gotoGoods(id) {

        // console.log(this.props)
        let { history } = this.props.mane.mane;
        // pathname: '/goods/' + id,
        // console.log(history)
        // history.push('/home/goods');
        history.push({
            pathname: '/home/goods',
            search: '?id=' + id,

        })
    }
    render() {
        return (

            <div className="checkitemli">
                {
                    this.state.datalist.map(goods => {
                        // console.log(goods._id);
                        return (<div className="box1" key={goods._id}>
                            <div className="box2" onClick={this.gotoGoods.bind(this, goods._id)}>
                                <img className="imgs" src={require(`../../img/imgages/${goods.image}`)} />
                                <div className="conter" >
                                    <p className="p1"> {goods.name}</p>
                                    <p className="p2">{goods.subtitle}</p>
                                    <div className="price">
                                        <span style={{ color: 'red', }}>￥{goods.price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-ctrl1">
                                <img src={require('../../static/image/new-cart.a16f026.png')} className="product-addcart-img1"></img>
                            </div>
                        </div >)
                    })
                }

            </div>

        )
    }
}
Home_main_goodslist = withAxios(Home_main_goodslist);
export default Home_main_goodslist;
