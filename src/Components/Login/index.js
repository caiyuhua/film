import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";


class Login extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (

			<div id="login">
				<ul>
					<li>
						<NavLink to="/my/login/loginemail" activeClassName="selected">美团账号登录</NavLink>
					</li>
					<li>
						<NavLink to="/my/login/logintel" activeClassName="selected">手机验证登录</NavLink>
					</li>
				</ul>

				{this.props.children}
			</div>
		)
	}

}

export default Login;