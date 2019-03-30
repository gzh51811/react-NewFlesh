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
                    icon:'home'
                },{
                    text:'分类',
                    name:'Home_categroy',
                    path:'/home/categroy',
                    icon:'bars'
                },{
                    text:'发现',
                    name:'Home_news',
                    path:'/home/news',
                    icon:'shopping'
                },{
                    text:'购物车',
                    name:'Home_cart',
                    path:'/home/cart',
                    icon:'shopping-cart'
                },
                {
                    text:'我的',
                    name:'Home_mine',
                    path:'/home/mine',
                    icon:'shopping-cart'
                }
            ],
            current:'Home'
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
                    this.state.navs.map(item=><Link to={item.path} key={item.text}>{item.text}</Link>)
                }
            </div>
        </div>
    }
}
Home = withRouter(Home);

export default Home;