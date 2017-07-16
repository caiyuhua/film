import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";

class Login extends Component{
	constructor(props){
		super(props);
	}


	render(){
		return (

			<div id="login">
				<header>
					<div><i className="iconfont icon-back"></i></div>
					<div><h3>我的订单</h3></div>
					<div></div>
				</header>

				<ul>
					<li></li>
					<li></li>
				</ul>
			</div>

		)
	}

}

export default Login;