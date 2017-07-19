import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';
import {
	NavLink,
	browserHistory
} from "react-router-dom";


class LoginEmail extends Component{
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.state = {
			regYanZheng:false
		}
	}

	login(){
			fetch('/api/user/login', {
				headers: {
				    'Content-Type': 'application/x-www-form-urlencoded'
				  },
				credentials: 'include',
			  	method: 'POST',
			  	body: "username=" + this.refs.username.value+"&psw="+ this.refs.psw.value
			}).then(function(res){
				return res.text();
			}).then(function(data){
				console.log(data);
				if(data ==="登陆成功"){
					// browserHistory.push('/mai');
				}
								
			})
	}

	render() {
		return (
			<div id="loginemail">
				<div className="backgroundWh">
					<div className="userMsg">
						<div className="msgIn email" onBlur={this.handleBlura.bind(this)}>
							<input className="username" type="text" placeholder="账号名/手机号/Email" ref ="username"/>					
							<span></span>
						</div>
						<div className="msgIn mima" onBlur={this.handleBlurb.bind(this)}>
							<input className="password" type="password" placeholder="请输入您的密码" ref = "password"/>					
							<span></span>
						</div>
					</div>
				</div>
				<div className="submit">
					<button onClick={this.handleClickbtn.bind(this)}>登录</button>
					<div>
						<NavLink to="/regist" activeClassName="active" className="regNow left">立即注册</NavLink>
						<NavLink to="/help" activeClassName="active" className="regNow right" >找回密码</NavLink>
					</div>
					<p className="telphone">© 猫眼电影 客服电话：<span>400-670-5335</span></p>
				</div>
			</div>
		)
	}

		//表单验证
		handleBlura(){
			var username = document.querySelector('.username').value;
			var regUser = /^[a-zA-z0-9][a-zA-Z0-9_]{2,13}$/;		
			var spanUser = document.querySelector('.email span');			
			var email = document.querySelector('.email');
			var mima = document.querySelector('.mima');

			if(regUser.test(username)){				
				spanUser.innerHTML = "正确";
				mima.style.borderBottom = 0; 
			}else{
				spanUser.innerHTML = "格式不对";
				email.style.borderBottom = '1px solid red'; 
			}
			
		}


		handleBlurb(){
			var password = document.querySelector('.password').value;
			var regPass = /\d[6-8]/;
			var spanPass = document.querySelector('.mima span');
			var mima = document.querySelector('.mima');

			if(regPass.test(password)){
				
				spanPass.innerHTML = "正确";	
				mima.style.borderBottom = 0; 
			}else{
				spanPass.innerHTML = "格式不对";
				mima.style.borderBottom = '1px solid red'; 
			}

			// if (regUser.test(username) && regPass.test(password)) {
			// 	this.setState({
			// 		regYanZheng:true
			// 	})
			// }
		}
	

		//后台验证发ajax
		handleClickbtn(){
			fetch('Index/index/login4ajax',{
				headers: {
				    'Content-Type': 'application/x-www-form-urlencoded'
				  },
				credentials: 'include',
			  	method: 'POST',
			  	body: "username=" + this.refs.username.value+"&psw="+ this.refs.password.value
			}).then(function(res){
				return res.json();
			}).then((data)=>{
				console.log(data.msg);
				if(data.code){
					this.props.history.push('/longinafter');
				}else{
					alert('请检查您的账号和密码')
				}
				
			})
		}

}

export default LoginEmail;