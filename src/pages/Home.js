import React,{Component} from 'react';

import '../css/home.css';

import Home_main from './Home_main';
import Home_categroy from './Home_categroy';
import Home_news from './Home_news';
import Home_cart from './Home_cart';
import Home_mine from './Home_mine';

import { Route, Redirect, Switch,Link, NavLink,withRouter} from 'react-router-dom';
class Home extends Component{
    constructor(){
        super();
        this.state = {
            navs:[
                {
                    text:'首页',
                    name:'Home_main',
                    path:'/home/main',
                    src: require('../static/image/home.png'),
                    src2: require('../static/image/home-active.png')
                },{
                    text:'分类',
                    name:'Home_categroy',
                    path:'/home/categroy',
                    src:require('../static/image/categroy.png'),
                    src2:require('../static/image/categroy-active.png')
                },{
                    text:'发现',
                    name:'Home_news',
                    path:'/home/news',
                    src:require('../static/image/news.png'),
                    src2:require('../static/image/news-active.png')
                },{
                    text:'购物车',
                    name:'Home_cart',
                    path:'/home/cart',
                    src:require('../static/image/cart.png'),
                    src2:require('../static/image/cart-active.png')
                },
                {
                    text:'我的',
                    name:'Home_mine',
                    path:'/home/mine',
                    src:require('../static/image/mine.png'),
                    src2:require('../static/image/mine-active.png')
                }
            ]
        }
        // console.log(this);
    }
    render(){
        // let {match} = this.props;
        return <div className="home" style={{height:'100%',display:'flex',flexDirection:'column'}}>
            <Switch>
                <Route path={"/home/main"} component={Home_main}/>
                <Route path={"/home/categroy"} component={Home_categroy}/>
                <Route path={"/home/news"} component={Home_news}/>
                <Route path={"/home/cart"} component={Home_cart}/>
                <Route path={"/home/mine"} component={Home_mine}/>
                <Redirect to='/home/main'/>
            </Switch>
            
            <div className="home_navs">
                {
                    this.state.navs.map(item=><NavLink activeStyle={{color:'#ff4891'}} to={item.path} key={item.text}>
                    {
                        this.props.location.pathname === item.path ? <img src={item.src2} alt=""/> : <img src={item.src} alt=""/>   
                    }
                        {/* <img src={item[this.state.current]} alt=""/> */}
                        <p>{item.text}</p>
                        </NavLink>)
                }
            </div>
        </div>
    }
}
Home = withRouter(Home);

export default Home;