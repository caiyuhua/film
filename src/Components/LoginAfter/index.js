import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";


class LoginAfter extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (
			<div id="loginAfter">
				<div className="top">
					<div>
						<NavLink to="/home/movie" activeClassName="selected"><i className="iconfont icon-back"></i></NavLink>
					</div>
					<div><h3 >我的订单</h3></div>
					<div className="useradmin"></div>
				</div>				
				
				<ul className='order'>
					<li><NavLink to="/loginafter/notuse" activeClassName="selected">未使用</NavLink></li>
					<li><NavLink to="/loginafter/obligation" activeClassName="selected">待付款</NavLink></li>
					<li><NavLink to="/loginafter/completed" activeClassName="selected">已完成</NavLink></li>
					<li><NavLink to="/loginafter/coupon" activeClassName="selected">优惠券</NavLink></li>
				</ul>
				{this.props.children}
				

				<footer className="foot">
					<ul>
						<li><NavLink to="/home/movie" activeClassName="myselected">电影</NavLink></li>
						<li><NavLink to="/loginafter/notuse" activeClassName="myselected">影院</NavLink></li>
						<li><NavLink to="/loginafter/notuse" activeClassName="myselected">我的</NavLink></li>
						<li className="lastli"><NavLink to="/loginafter/notuse" activeClassName="myselected">客户端下载</NavLink></li>
					</ul>
					<div className="nav">
						<div className="username"><h3></h3></div>
						<div className="tuichu"><NavLink to="/my/login/loginemail" activeClassName="myselected">退出</NavLink></div>
						<div className="city"><div>城市:大连</div></div>
					</div>


				</footer>
			</div>
		)
	}


	componentDidMount() {
		var str = document.cookie;
		var arr = str.split('; ');
		console.log(arr.length);
		console.log(arr[2]);
		var arra = arr[2];

		var key_value;
		for (var i = 0; i < arra.length; i++) {
            key_value = arra.split('=');
            console.log(key_value[0]);
            //key_value[0]就是cookie的name
            //key_value[1]就是cookie的value    
            if(key_value[0]== 'username'){
            	var useradmin  = key_value[1];
            }

        }

        
        document.querySelector('.username h3').innerHTML = useradmin;
	}

}

export default LoginAfter;