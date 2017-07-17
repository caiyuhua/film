import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';
import {
	NavLink
} from "react-router-dom";



class LoginEmail extends Component{
	constructor(props) {
		super(props);
		
	}

	componentDidMount(){

	}

	render() {
		return (
			<div id="loginemail">
				<div className="backgroundWh">
					<div className="userMsg">
						<div className="msgIn email">
							<input className="username" type="text" placeholder="账号名/手机号/Email"/>					
						</div>
						<div className="msgIn mima">
							<input className="paw" type="password" placeholder="请输入您的密码"/>					
						</div>
					</div>
				</div>
				<div className="submit">
					<button>登录</button>
					<div>
						<NavLink to="/regist" activeClassName="active" className="regNow left">立即注册</NavLink>
						<NavLink to="/help" activeClassName="active" className="regNow right" >找回密码</NavLink>
					</div>
					<p className="telphone">© 猫眼电影 客服电话：<span>400-670-5335</span></p>
				</div>
			</div>
		)
	}

}

export default LoginEmail;